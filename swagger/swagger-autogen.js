const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' /* varsion used for swagger ui*/ });

  /*
 /  ----  environment variables
/*/

// ----- use dotenv for resolve variables 
const dotenv = require("dotenv")
dotenv.config()

// ----- get variables
const basedURL = process.env.BasedUrl

  /*
 /  ----  collect apis and components
/*/

// ----- get function to results() to collect components ( schema )
const { results } = require("./model/collectModel")

// ----- destruction results
const { apis, components } = results()

  /*
 /  ----  get info details from the  package.json file
/*/

// ----- import package json files for contact information
const packageJson = require("../package.json")

// ----- destruction needs variables for info document
const { version, name, description, license, author} = packageJson

  /*
 /  ----  document to transfer to swagger json file
/*/

const doc = {
  info: {
    termsOfService : "https://github.com/Team-innovation-INC/PregressServer.git",
    version,
    title: name,
    description,
    contact: author,
    license: {
      name: license,
      url: 'https://github.com/Team-innovation-INC/demo_Progress/blob/main/LICENSE'
    },
  },
  apis: apis,
  servers: [
    {
      url: "http://{host}:{port}/",
      description: "local server for development",
      variables: {
        host: {
          default: "localhost",
          description: "this value is assigned by the service provider, in this example `localhost:5000`"
        },
        port: {
          enum: [ 5000, 3000 ],
          default: 5000
        }
      }
    },
    {
      url: `https://progress-application.onrender.com/`,
      description: "deployed server for the app ",
    },
    {
      url: `https://progress-develop-server.onrender.com/`,
      description: "developer server for test",
    }
    
  ],
  basePath: '',
  schemes: ["https"],
  consumes: ['application/json'],
  produces: ['application/json'],
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
  components, 

};


swaggerAutogen('swagger-output.json' /* file name to create */, ['./index.js' ] /* entry point collect routes */, doc /* object based on swagger information */, (err) => {
  if(err) { console.error("generate swagger json file error", err) }
})