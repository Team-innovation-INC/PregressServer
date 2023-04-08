const pino = require('pino');
const pretty = require('pino-pretty');
const dayjs = require ("dayjs");

const stream = pretty({
  transport :{
        target :"validation/logs/pinoPrettier",
  },
  colorize: true,
  sync: true,
})
const log = pino({ level: 'info' }, stream)

module.exports =  log;