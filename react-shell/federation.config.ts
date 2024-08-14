/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const {
    withNativeFederation,
    shareAll,
} = require("@softarc/native-federation/build");
  
module.exports = withNativeFederation({
    name: "shell",
    shared: {
        ...shareAll({
            singleton: true,
            strictVersion: true,
            requiredVersion: "auto",
            includeSecondaries: false,
        }),
    }
});
