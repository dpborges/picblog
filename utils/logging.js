const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'Picblog' }),
    timestamp(),
    myFormat
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    // new transports.File({ filename: 'error.log', level: 'error' }),
    // new transports.File({ filename: 'combined.log' }),
    new transports.Console()
  ],
});

if (process.env.NODE_ENV === "test") {
  logger
   .clear()
   .add(new transports.File({ filename: 'error.log', level: 'error' }))
   .add(new transports.File({ filename: 'combined.log' }))
}

module.exports = { logger };



// TEST RUNS
// logger.info('This is info message');
// logger.error('This is error message');
// logger.warn('This is warning message');