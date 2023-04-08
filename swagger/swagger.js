const swaggerUi = require( "swagger-ui-express");
const log = require("./logger");
const swaggerDocument = require('./swagger-output.json');

function swaggerDocs(app, port) {
  // Swagger page
  app.use("/swagger/documentation", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  // Docs in JSON format
  app.get("/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  log.info(`Docs available at /swagger/documentation`);
}

module.exports =  swaggerDocs;