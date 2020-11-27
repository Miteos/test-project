const {
    override,
    disableEsLint,
    addDecoratorsLegacy,
    fixBabelImports,
} = require('customize-cra');



module.exports = override(
    disableEsLint(),
    addDecoratorsLegacy(),
    fixBabelImports("react-app-rewire-mobx", {
        libraryDirectory: "",
        camel2DashComponentName: false
    }),
);
// const {addDecoratorsLegacy, useEslintRc, override} = require('customize-cra');
// const path = require('path');
//
// module.exports = override(
//     addDecoratorsLegacy(),
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     useEslintRc(path.resolve(__dirname, '.eslintrc')),
// );
