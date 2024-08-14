/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const mfe1 = require("@softarc/native-federation/build");
  
module.exports = mfe1.withNativeFederation({
    name: "mfe1",
    exposes: {
        "./root": "./src/App.tsx",
    },
    shared: {
        ...mfe1.shareAll({
            singleton: true,
            strictVersion: true,
            requiredVersion: "auto",
            includeSecondaries: false,
        }),
    },
    skip: [
        '@softarc/native-federation',
        'react',
        'react-dom'
    ]
});
