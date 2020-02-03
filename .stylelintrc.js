module.exports = {
    "plugins": ["stylelint-prettier"],

    "rules": {
        "block-no-empty": null,
        "color-no-invalid-hex": true,
        "comment-empty-line-before": [ "always", {
            "ignore": ["stylelint-commands", "after-comment"]
        } ],
        "declaration-colon-space-after": "always",
        "indentation": 4,
        "max-empty-lines": 2,
        "rule-empty-line-before": [ "always", {
            "except": ["first-nested"],
            "ignore": ["after-comment"]
        } ],
        "prettier/prettier": true,
        "unit-whitelist": ["px", "em", "rem", "%", "s"]
    }
}