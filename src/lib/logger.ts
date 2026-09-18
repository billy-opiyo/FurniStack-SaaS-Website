type LogLevel = 'debug' | 'info' | 'warn' | 'error';

const isProduction = process.env.NODE_ENV === 'production';

const formatMessage = (level: LogLevel, message: string, meta?: Record<string, unknown>) => {
  const base = `[${new Date().toISOString()}] [${level.toUpperCase()}] ${message}`;

  if (!meta || Object.keys(meta).length === 0) {
    return base;
  }

  return `${base} ${JSON.stringify(meta)}`;
};

const log = (level: LogLevel, message: string, meta?: Record<string, unknown>) => {
  const output = formatMessage(level, message, meta);

  if (isProduction) {
    // Keep structured server-side logging in production without noisy console output.
    console[level](output);
    return;
  }

  console[level](output);
};

export const logger = {
  debug: (message: string, meta?: Record<string, unknown>) => log('debug', message, meta),
  info: (message: string, meta?: Record<string, unknown>) => log('info', message, meta),
  warn: (message: string, meta?: Record<string, unknown>) => log('warn', message, meta),
  error: (message: string, meta?: Record<string, unknown>) => log('error', message, meta),
};

export default logger;
