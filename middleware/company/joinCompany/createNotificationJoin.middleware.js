/*
 /  ---- notification info join company middleware
/ */

// ----- import model
const NotificationModel = require('../../../model/notification/Notification.model');

exports.createJoinNotification = async (req, res, next) => {
  // ----- get using information from request
  const { adminId, user, notificationInfo } = req;
  try {
    // ----- create new notification info model
    const CompanyNotification = new NotificationModel({
      receiver: adminId,
      refModel: 'Company',
      sender: user.id,
      itemInfo: notificationInfo,
    });
    // ----- save the  new notification info model
    await CompanyNotification.save();
    // ----- pass the id to the request
    req.notificationId = CompanyNotification.id.toString();
    // ----- pass to next middleware
    next();
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};
