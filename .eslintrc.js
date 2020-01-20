module.exports = {
    
    "extends": [
        "standardx",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "prettier/@typescript-eslint",
        "prettier/react"
        "plugin:@typescript-eslint/eslint-plugin",
    ],
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
    },
    "rules": {
        "react/prop-types": "off",
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