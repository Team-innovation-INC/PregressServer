const Password = require("../../../model/user/password");

exports.createPassword = async (req, res, next) => {
    const {password} = req.body
    try {
      const NewPassword = new Password({
        password
      })
      await NewPassword.save()
      req.password = NewPassword.id
      next();
    } catch (error) {
      console.log("error", error)
      return res.status(500).send('Internal server error');
    }
  };