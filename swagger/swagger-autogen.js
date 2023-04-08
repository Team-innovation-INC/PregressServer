const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'});
const packageJson = require("../package.json")
const { results} = require("./model/collectModel")


// Load Mongoose models



const { apis, components } = results()
/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

const { version, name, description} = packageJson
const basedURL = process.env.BasedUrl

const doc = {
  info: {
    version,      // by default: '1.0.0'
    title: name,        // by default: 'REST API'
    description,  // by default: ''
  },
  apis: apis,
  host: basedURL,      // by default: 'localhost:3000'
  basePath: '',  // by default: '/'
  schemes: ["https"],   // by default: ['http']
  consumes: [],  // by default: ['application/json']
  produces: [],  // by default: ['application/json']
  securityDefinitions: {
    bearerAuth: {
        type: 'https',
        scheme: 'bearer',
        bearerFormat: 'JWT'
    }
  },  // by default: empty object
  components: { ...components, 
    bearerAuth: {
      type: 'https',
      scheme: 'bearer',
      bearerFormat: 'JWT'
  } 
  }            // by default: empty object (OpenAPI 3.x)
};


swaggerAutogen('swagger/swagger-output.json', ['index.js' ], doc)