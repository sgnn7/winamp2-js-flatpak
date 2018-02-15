module.exports = {
    "env": {
        "amd": true,
        "node": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            4,
            {
                "ArrayExpression": "first",
                "CallExpression": {
                    "arguments": "first"
                },
                "FunctionDeclaration": {
                    "parameters": "first"
                },
                "MemberExpression": 0,
                "ObjectExpression": "first",
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "no-console":0,
        "no-process-env": 0,
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
