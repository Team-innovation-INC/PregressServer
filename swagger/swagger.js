const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const dotenv = require('dotenv');
const swaggerDocument = require('../swagger-output.json');
const { downloadSwaggerFile } = require('./routes/downloadFile');

// ----- use dotenv for resolve variables
const { swaggerUI } = require('./routes/browseDocumentation');
const { swaggerTag } = require('./middleware/swagger/swagger.tag');
// Import the path module
const path = require('path');
dotenv.config();

// ----- get variables
const { SWAGGERPASSWORD } = process.env;
const { SWAGGERUSER } = process.env;
router.use('', swaggerTag);
// Swagger page
router.use(
  `/api/${SWAGGERUSER}-${SWAGGERPASSWORD}`,
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument),
);

// Docs in JSON format
router.post('/docs.json/', downloadSwaggerFile);

// serve the index.html file for /swagger/* route
router.get('/auth', (req, res) =>
  // #swagger.security = []
  res.sendFile(path.join(__dirname, 'middleware/index.html')),
);

// serve the index.html file for /swagger/* route
router.post('/documentation-auth', swaggerUI);

module.exports = router;
