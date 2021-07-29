import * as R from 'ramda';
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

// *******************************************************************************
// winston logging configuration
// IMPORTANT NOTE: file transports cannot be turned on as fs libary is not available
// on browser. The only environment logging to file is "test", all others write to 
// console.
// *******************************************************************************

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

if (process.env.NODE_ENV === "development") {
  logger
    .clear()
    .add(new transports.Console() )
};


// *******************************************************************************
// This is my custom trace function; it is not part of winston. Implemented until 
// I find a way to implement debug or trace level with winston both on application 
// level or file level. For now, all files s/d use the appTrace and only turn on 
// fileTrace when needed within the file itself. AppTrace is only enabled for 
// "development" environment. If using fileTrace on 1 or more specific files, 
// turn off app level tracing below. 
// *******************************************************************************
const app_trace_enabled = process.env.NODE_ENV === "development" ? true : false;

const tracer =   (isEnabled, level, msg) => {
  if (isEnabled && level === "appl") {  
    console.log(`trace: ${msg}`);
  } else if (isEnabled && level === "file") {
    console.log(`trace: ${msg}`);
  }
}

const curriedTracer = R.curry(tracer);
const appTrace   = curriedTracer(app_trace_enabled, "appl");  /* enabled by default for development */
const fileTrace  = curriedTracer(true, "file");

module.exports = { logger, appTrace, fileTrace };



// TEST RUNS
// logger.info('This is info message');
// logger.error('This is error message');
// logger.warn('This is warning message');
// logger.debug('This is debug message');