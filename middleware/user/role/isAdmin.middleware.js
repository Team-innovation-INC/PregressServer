const Role = require("../../../model/user/role.model")

exports.isAdmin = async(req, res, next) => {
    const user = req.user
    try {
        const role = await Role.findById(user.role)
        if (role.roleName !== "admin") {
            return res.status(403).send({message: "not authorized"})
        }
        next()
    } catch (error) {
        
    }
}