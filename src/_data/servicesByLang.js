// Generate all combinations of services × languages for nested pagination
module.exports = function() {
  const services = require('./services.js')();
  const languages = require('./languages.js');
  
  const combinations = [];
  for (const lang of languages) {
    for (const service of services) {
      combinations.push({
        service: service,
        lang: lang
      });
    }
  }
  
  return combinations;
};

