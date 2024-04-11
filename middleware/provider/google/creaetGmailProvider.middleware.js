const Provider = require("../../../model/provider/provider.model");

// Middleware function to create a new Gmail provider
exports.createGmailProvider = async (req, res, next) => {
  const {GOOGLE_CLIENT_ID} = process.env;
  const { access_token } = req.token;
  try {
    const { adminUserId } = req.body; 

    // Create a new provider object
    const gmailProvider = new Provider({
      name: 'gmail',
      type: 'Gmail',
      admin: adminUserId,
      providerId: GOOGLE_CLIENT_ID,
      token: access_token
    });

    // Save the new provider to the database
    const savedProvider = await gmailProvider.save();

    res.status(201).json({ message: 'Gmail provider created successfully', provider: savedProvider });
  } catch (error) {
    console.error('Error creating Gmail provider:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};