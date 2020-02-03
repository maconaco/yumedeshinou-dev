module.exports = {

    "settings": {
        "react": {
          "createClass": "createReactClass", // Regex for Component Factory to use,
                                             // default to "createReactClass"
          "pragma": "React",  // Pragma to use, default to "React"
          "version": "detect", // React version. "detect" automatically picks the version you have installed.
                               // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                               // default to latest and warns if missing
                               // It will default to "detect" in the future
          "flowVersion": "0.53" // Flow version
        },
        "propWrapperFunctions": [
            // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
            "forbidExtraProps",
            {"property": "freeze", "object": "Object"},
            {"property": "myFavoriteWrapper"}
        ],
        "linkComponents": [
          // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
            "Hyperlink",
            {"name": "Link", "linkAttribute": "to"}
        ],
        "import/resolver": webpack
    },
    
    "extends": [
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "plugin:react/recommended",
        "prettier/@typescript-eslint",
        "prettier/react",
    ],
    "plugins": ["@typescript-eslint", "prettier","import"],
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
    },
    "rules": {
        "react/prop-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
    },
    "overrides": [
        {
        "files": ["*.ts","*.tsx"],
        "rules": {
            "@typescript-eslint/explicit-function-return-type": "off",
        }
        }
    ]
}