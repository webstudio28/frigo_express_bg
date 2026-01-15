// Generate all combinations of transport × languages for nested pagination
module.exports = function() {
  const transport = require('./transport.js')();
  const languages = require('./languages.js');
  
  const combinations = [];
  for (const lang of languages) {
    for (const vehicle of transport) {
      combinations.push({
        vehicle: vehicle,
        lang: lang
      });
    }
  }
  
  return combinations;
};

