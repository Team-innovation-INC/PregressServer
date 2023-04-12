const router = require("express").Router();
const swaggerUi = require( "swagger-ui-express");
const swaggerDocument = require('../swagger-output.json');
const { downloadSwaggerFile } = require("./routes/downloadFile");

// ----- use dotenv for resolve variables 
const dotenv = require("dotenv");
const { swaggerUI } = require("./routes/browseDocumentation");
const { swaggerTag } = require("./middlewares/swagger/swagger.tag");
dotenv.config()

// ----- get variables
const SWAGGERPASSWORD = process.env.SWAGGERPASSWORD
const SWAGGERUSER = process.env.SWAGGERUSER
router.use('',swaggerTag)
// Swagger page
router.use(`/api/${SWAGGERUSER}-${SWAGGERPASSWORD}`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Docs in JSON format
router.post("/docs.json/", downloadSwaggerFile);

// serve the index.html file for /swagger/* route
router.get('/auth', (req, res) => {
  // #swagger.security = []
  return res.sendFile(__dirname + '/middlewares/index.html');
});

// serve the index.html file for /swagger/* route
router.post('/documentation-auth',swaggerUI);





module.exports =  router;