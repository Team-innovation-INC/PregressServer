const providersTypes = [
  {
    PVC: [
      { integrationStatus: 'available', type: 'GitHub' },
      { integrationStatus: 'soon', type: 'GitLab' },
      { integrationStatus: 'soon', type: 'Bitbucket' },
    ],
  },
  {
    Management: [{ integrationStatus: 'soon', type: 'Jira' }],
  },
  {
    cloud: [{ integrationStatus: 'available', type: 'Mega' }],
  },
  {
    communication: [
      { integrationStatus: 'available', type: 'Gmail' },
      { integrationStatus: 'available', type: 'Google Calendar' },
      { integrationStatus: 'available', type: 'Google Meet' },
    ],
  },
];

/*
/  ---- get list of providers for a project controller
/ */

const getListProviders = async (req, res) => {
  const { providers } = req;

  try {
    // Initialize an object to store providers grouped by category
    const responseData = {};

    // Iterate over the provider types
    providersTypes.forEach(providerCategory => {
      // Get the category name
      const categoryName = Object.keys(providerCategory)[0];

      // Initialize an array to store providers of this category
      const categoryProviders = [];

      // Iterate over the provider types within this category
      providerCategory[categoryName].forEach(providerType => {
        // Find the provider in req.providers if it exists
        const foundProvider = providers.find(
          provider => provider.type === providerType.type,
        );

        // If the provider exists, add it to the categoryProviders array
        if (foundProvider) {
          categoryProviders.push(foundProvider);
        } else {
          // If not, add the providerType object as is
          categoryProviders.push(providerType);
        }
      });

      // Add the categoryProviders array to the responseData object
      responseData[categoryName] = categoryProviders;
    });
    // Send the response with the constructed data
    return res.status(200).send({
      message: 'provider.list.success',
      status: providers.length > 0 ? 200 : 404,
      success: true,
      data: responseData,
    });
  } catch (error) {
    return res.status(400).send({
      message: 'provider.list.failed',
      status: 500,
      success: false,
    });
  }
};

module.exports = getListProviders;
