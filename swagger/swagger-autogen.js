const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });
const packageJson = require("../package.json")
const { results } = require("./model/collectModel")
const dotenv = require("dotenv")
dotenv.config()

const basedURL = process.env.BasedUrl

// Load Mongoose models



const { apis, components } = results()
/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

const { version, name, description, license} = packageJson
const doc = {
  info: {
    version,      // by default: '1.0.0'
    title: name,        // by default: 'REST API'
    description,  // by default: '',
    contact: {
      name: 'Raed rdhaounia',
      url: 'https://raedrdhaounia.netlify.app/',
      email: 'raedrdhaounia@gmail.com'
    },
    license: {
      name: license,
      url: 'https://github.com/Team-innovation-INC/demo_Progress/blob/main/LICENSE'
    },
  },
  apis: apis,
  servers: [
    {
      url: "http://localhost:5000/",
      description: "local server for development",
    },
    {
      url: basedURL,
      description: "deployed server",
  }
  ],

  basePath: '',  // by default: '/'
  schemes: ["https"],   // by default: ['http']
  consumes: [],  // by default: ['application/json']
  produces: [],  // by default: ['application/json']
  security: [{
    bearerAuth: []
  }],
  securityDefinitions: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
    }
  },  // by default: empty object
  components: { ...components, 
  }            // by default: empty object (OpenAPI 3.x)
};


swaggerAutogen('swagger-output.json', ['index.js' ], doc)