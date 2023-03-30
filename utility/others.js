const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

// Read the HTML file
exports.getHtmlFile = (user, link, fileName) =>{
  const {email, userName, fullName} = user
  const templatePath = path.join("utility", "EmailsTemplates", fileName);
  const template = fs.readFileSync(templatePath, "utf-8");
  const compiledTemplate = handlebars.compile(template);
  const html = compiledTemplate({link, fullName, userName, email});
  return html
}