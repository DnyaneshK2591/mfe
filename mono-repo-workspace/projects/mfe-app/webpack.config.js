const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfe-app",
  filename: "remoteEntry.js",
  exposes: {
    "./MfehomeModule": "./projects/mfe-app/src/app/mfehome/mfehome.module.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
