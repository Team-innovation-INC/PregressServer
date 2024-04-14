exports.prettierCostum = {
  colorizeObjects: true, // --colorizeObjects
  crlf: true, // --crlf
  errorLikeObjectKeys: ['err', 'error'], // --errorLikeObjectKeys
  errorProps: '', // --errorProps
  levelFirst: false, // --levelFirst
  messageKey: 'msg', // --messageKey
  levelKey: 'level', // --levelKey
  messageFormat: false, // --messageFormat
  timestampKey: 'time', // --timestampKey
  translateTime: false, // --translateTime
  ignore: 'pid,hostname', // --ignore
  include: 'level,time', // --include
  hideObject: false, // --hideObject
  singleLine: false, // --singleLine
  config: '/path/to/config/', // --config
  customColors: 'err:red,info:blue', // --customColors
  customLevels: 'err:99,info:1', // --customLevels
  levelLabel: 'levelLabel', // --levelLabel
  minimumLevel: 'info', // --minimumLevel
  useOnlyCustomProps: true, // --useOnlyCustomProps
  // The file or file descriptor (1 is stdout) to write to
  destination: 1,

  // Alternatively, pass a `sonic-boom` instance (allowing more flexibility):
  // destination: new SonicBoom({ dest: 'a/file', mkdir: true })

  // You can also configure some SonicBoom options directly
  sync: false, // by default we write asynchronously
  append: true, // the file is opened with the 'a' flag
  mkdir: true, // create the target destination

  customPrettifiers: {},
};
