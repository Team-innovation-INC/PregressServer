const fs = require('fs');
// ----- use dotenv for resolve variables
const dotenv = require('dotenv');

dotenv.config();

// ----- get variables
const { SWAGGERADMI } = process.env;
exports.downloadSwaggerFile = (req, res) => {
  // #swagger.security = []
  const { admin } = req.body;
  try {
    if (admin !== SWAGGERADMI) {
      return res.redirect('/swagger/auth');
    }
    // Set the response headers to download file
    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader(
      'Content-Disposition',
      'attachment; filename="swagger-output.json"',
    );
    const fileStream = fs.createReadStream('swagger-output.json');
    res.status(200);
    return fileStream.pipe(res);
  } catch (error) {
    return res.status(500).send('server error please retry later');
  }
};
