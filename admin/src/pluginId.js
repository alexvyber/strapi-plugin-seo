const pluginPkg = require('../../package.json');

const pluginId = pluginPkg.name.replace(/^@alexvyber\/plugin-/i, '');

module.exports = pluginId;
