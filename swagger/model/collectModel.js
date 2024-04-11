const fs = require('fs');
const path = require('path');
const User = require('../../model/user/Users.model');
const defaultValues = require('./defaultValues');
const modelsDir = path.join(__dirname, "../../model");
const {modelsList} = require('./modelsPaths')

const collectPaths = (_modelsList, modelsDir) => {
  let paths = []
  _modelsList.map(modulepath => paths.push(path.join(modelsDir, modulepath)))
  return paths
}

const getModules = (modelsDir) => {
  try {
    const models = fs.readdirSync(modelsDir)
      .filter(file => file.endsWith('.model.js'))
      .map(file => require(path.join(modelsDir, file)));
    return models
  } catch (error) {
    console.error("error at function getModules() please check")
  }
}

const collectModel = (_models) =>  {
  let components = {
    schemas :  {}
  }
  let apis = []
  try {
    _models.forEach(model => {
      apis.push(`./models/${model.modelName}.js`);
      const schema = model.schema;
      const modelName = model.modelName;
      components.schemas[modelName] = {
        fields: {},
      };
    
      for (const path in schema.paths) {
        const obj = schema.paths[path];
          components.schemas[modelName].fields[obj.path] = defaultValues(obj.path, obj.instance)
      }
    });

  return {apis, components}

  } catch (error) {
    console.error("error at function collectModel() please check")

  }
}

exports.results = () => {
  let collections = {apis: [], components: {schemas: {}} }
  const re = collectPaths(modelsList, modelsDir)
  if (re !== undefined) {
    re.forEach((Path, index) => {
      const model = getModules(Path)
      const modelCollected = collectModel(model)
      const {apis, components} = modelCollected
      collections.apis = [...collections.apis, ...apis]
      collections.components.schemas = {  ...collections.components.schemas, [modelsList[index]]:{...components.schemas}}
    })
  }
  return collections
}