const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');

// Read the HTML file
exports.getHtmlFile = (user, link, fileName) => {
  const { email, userName, fullName } = user;
  const templatePath = path.join(
    'utility',
    'node-mailer',
    'EmailsTemplates',
    fileName,
  );
  const template = fs.readFileSync(templatePath, 'utf-8');
  const compiledTemplate = handlebars.compile(template);
  return compiledTemplate({
    link,
    fullName,
    userName,
    email,
  });
};

exports.populateExtra = _component => ({
  ..._component,
  _id: undefined,
  __v: undefined,
  last_update: undefined,
});
