const fs = require('fs');
const path = require('path');
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
    console.log("error", error)
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
        type: 'object',
        properties: {},
      };
    
      for (const path in schema.paths) {
        const obj = schema.paths[path];
        const type = obj.instance;
    
        if (type === 'String') {
          components.schemas[modelName].properties[obj.path] = { type: 'string' };
        } else if (type === 'Number') {
          components.schemas[modelName].properties[obj.path] = { type: 'number' };
        } else if (type === 'Boolean') {
          components.schemas[modelName].properties[obj.path] = { type: 'boolean' };
        } else if (type === 'Date') {
          components.schemas[modelName].properties[obj.path] = { type: 'string', format: 'date-time' };
        } else if (type === 'ObjectID') {
          components.schemas[modelName].properties[obj.path] = { type: 'string', format: 'objectId' };
        }
      }
    });

  return {apis, components}

  } catch (error) {
    console.log("error", error)
  }
}

exports.results = () => {
  let collections = {apis: [], components: {schemas: {}} }
  const re = collectPaths(modelsList, modelsDir)
  if (re !== undefined) {
    re.forEach((Path, index) => {
      const model = getModules(Path)
      const modelCollected = collectModel(model)
      console.log("model", typeof(model[index]))
      const {apis, components} = modelCollected
      collections.apis = [...collections.apis, ...apis]
      collections.components.schemas = {  ...collections.components.schemas, [modelsList[index]]:{...components.schemas}}
    })
  }
  return collections
}