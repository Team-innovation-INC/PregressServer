const providersTypes = ['GitHub', 'Jira', 'Mega'];

/*
/  ---- get list of providers for a project controller
/*/

const getListProviders = async (req, res) => {
  const providers = req.providers;

  try {
    // Initialize an array to store the response data
    const responseData = [];

    // Iterate over the provider types
    for (const providerType of providersTypes) {
      // Check if a provider with the current type exists in the providers array
      const existingProvider = providers.find(provider => provider.name === providerType);

      // If a provider with the current type exists, push its information to the response data
      // Otherwise, push an object with only the type
      if (existingProvider) {
        responseData.push(existingProvider);
      } else {
        responseData.push({ type: providerType });
      }
    }

    // Send the response with the constructed data
    return res.status(200).send({ 
      message: "provider.list.success",
      status: providers.length > 0 ? 200 : 404 ,
      success: true, 
      data: responseData
    });
  } catch (error) {
    return res.status(400).send({ 
      message: "provider.list.failed",
      status: 500,
      success: false
    });
  }
};

module.exports = getListProviders;
