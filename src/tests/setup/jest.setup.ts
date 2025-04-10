jest.setTimeout(30000);
// globalThis.fetch = require('node-fetch');
process.env.NODE_ENV = 'test';
console.warn = (...args) => {
  if (!args[0]?.includes('DeprecationWarning')) {
    console.warn(...args);
  }
};