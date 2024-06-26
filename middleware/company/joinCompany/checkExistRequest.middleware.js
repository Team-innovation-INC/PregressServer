/*
 /  ---- check exist request middleware
/ */

// ----- import model
const NotificationModel = require('../../../model/notification/Notification.model');

exports.checkExistNotification = async (req, res, next) => {
  // ----- get using information from request
  const { adminId, user } = req;
  try {
    // ----- check exist request
    const notification = await NotificationModel.findOne({
      sender: user._id,
      receiver: adminId,
    });
    if (notification) {
      return res.status(400).send({
        message: 'request already send please wait until accept request',
      });
    }
    // ----- pass to next middleware
    next();
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};
