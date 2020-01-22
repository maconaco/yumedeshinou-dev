module.exports = {
    
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
    "plugins": ["@typescript-eslint", "prettier"],
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
    },
    "rules": {
        "react/prop-types": "off",
        "@typescript-eslint/no-explicit-any": "off"
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