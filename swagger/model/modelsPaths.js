// List of model names
const modelsList = [
  'user',
  'company',
  'task',
  'email',
  'messages',
  'notification',
  'provider',
  'Utility',
  'ability'
];

// Sort the models alphabetically (case-insensitive)
const sortedModelsList = modelsList.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

// Export the sorted list
module.exports = {
  modelsList: sortedModelsList,
};
