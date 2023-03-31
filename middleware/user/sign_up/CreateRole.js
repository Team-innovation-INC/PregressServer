const Role = require("../../../model/user/Role");

exports.createRole = async (req, res, next) => {
    try {
      const role = new Role({})
      req.role = role
      await role.save()
      next();
    } catch (error) {
      console.log("error", error)
      return res.status(500).send('Internal server error');
    }
  };