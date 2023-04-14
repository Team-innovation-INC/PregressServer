const ejs = require('ejs');


exports.resetPasswordFile = (req, res) => {
    const token = req.query.name
    ejs.renderFile(__dirname + '/resetPassword.ejs', { token }, (err, data) => {
      if (err) {
        console.log(err);
       return res.status(500).send('Internal Server Error');
      } else {
        console.log("data", data)
       return res.send(data);
      }
    });
  }