  /*
 /  ---- company admin middleware
/*/

// ----- import model
const CompanyMembers = require("../../../model/company/companyMembers.model")

exports.checkValidWebsite = async(req, res, next) => {
// ----- get using information from request
  const {user} = req
  try {
// ----- create new company members 
    const companyMember = new CompanyMembers({
        admin : user.id,
        users : [user.id]
    })
    await companyMember.save()
    req.companyMembers = companyMember.id.toString()
// ----- pass to next middleware
    next()
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
}