const environment = {
    development: {
      isProduction: false,
      apiUrl: 'http://s8.staging-host.com/simplelists/api/'
    },
    production: {
      isProduction: false,
      apiUrl: 'http://s8.staging-host.com/simplelists/api/'
    }
  }[process.env.NODE_ENV || 'development'];
  
  let AuthToken;
  
  module.exports = Object.assign(
    {},
    environment
  );
