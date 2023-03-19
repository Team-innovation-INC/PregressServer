const User = require("../../../model/user/Users");
const { sendPasswordResetEmail } = require("../../../utility/sendEmailForgetPassword");

const resetPassword =  async (req, res) => {
    try {
        const { email } = req.body;
    
        // Check if email exists in database
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(400).json({ message: "please check your email" });
        }
    
        // Generate unique token for password reset
        const token = await user.generatePasswordResetToken();
    
        // Send password reset email with token
        await sendPasswordResetEmail(user.email, token);
    
        return res.status(200).json({ message: "Password reset email sent" });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
      }
};

module.exports = resetPassword;
