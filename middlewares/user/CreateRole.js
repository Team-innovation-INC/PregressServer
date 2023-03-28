const Role = require("../../model/user/Role");

exports.createRole = async (req, res, next) => {
    try {
      const role = new Role({})
      req.role = role
      role.save()
      next();
    } catch (error) {
      console.error(error);
      return res.status(400).send({ error: error.message });
    }
  };