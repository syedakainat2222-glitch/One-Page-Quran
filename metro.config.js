const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add 'pdf' to the list of asset extensions.
config.resolver.assetExts.push('pdf');

module.exports = config;
