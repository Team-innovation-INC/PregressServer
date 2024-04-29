const swaggerAutogen = require('swagger-autogen')({
   /**
    *  version used for swagger ui 
    */
  openapi: '3.0.0',
});

/*
 ----  get function to results() to collect components ( schema )
*/
const { results } = require('./model/collectModel');

/*
 ----  destruction results
*/
const { apis, components } = results();

/*
 ----  get info details from the  package.json file
*/
const packageJson = require('../package.json');

/*
 ----  destruction needs variables for info document
*/
const { version, description, license, author } = packageJson;

/*
 ----  document to transfer to swagger json file
*/

const doc = {
  info: {
    termsOfService: 'https://github.com/Team-innovation-INC/PregressServer.git',
    version,
    title: packageJson.name,
    description,
    contact: author,
    license: {
      name: license,
      url: 'https://github.com/Team-innovation-INC/demo_Progress/blob/main/LICENSE',
    },
  },
  apis,
  servers: [
    {
      url: 'http://{host}:{port}/',
      description: 'local server for development',
      variables: {
        host: {
          default: 'localhost',
          description:
            'this value is assigned by the service provider, in this example `localhost:5000`',
        },
        port: {
          enum: [5000, 3000],
          default: 5000,
        },
      },
    },
    {
      url: 'https://progress-application.onrender.com/',
      description: 'deployed server for the app ',
    },
    {
      url: 'https://progress-develop-server.onrender.com/',
      description: 'developer server for test',
    },
  ],
  basePath: '',
  schemes: ['https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  security: [
    {
      bearerAuth: [],
    },
  ],
  securityDefinitions: {
    bearerAuth: {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    },
  },
  components,
};

swaggerAutogen(
  /**
    * file name to create
    */
  'swagger-output.json',
   /**
    * entry point collect routes
    */
  ['./index.js'],
   /**
    * object based on swagger information
    */
  doc,
  err => {
    if (err) {
      console.error('generate swagger json file error', err);
    }
  },
);
