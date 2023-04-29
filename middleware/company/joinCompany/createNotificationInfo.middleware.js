  /*
 /  ---- notification info join company middleware
/*/

// ----- import model
const NotificationInfo = require("../../../model/notification/notificationInfo.model")
const UserContact = require("../../../model/user/userContacts.model")

exports.createJoinNotificationInfo= async(req, res, next) => {
// ----- get using information from request
  const {userContactId} = req
  try {
    const userInfo = await UserContact.findById(userContactId._id.toString())
// ----- create new notification info model 
    const joinCompanyNotification = new NotificationInfo({
        title: 'Join your company',
        description :`user with email ${userInfo.email} ask to join your company`,
    })
// ----- save the  new notification info model 
    await joinCompanyNotification.save()
// ----- pass the id to the request
    req.notificationInfo = joinCompanyNotification.id.toString()
// ----- pass to next middleware
    next()
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
}