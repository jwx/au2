module.exports = {
    "new": {
        "cmd": "npx",
        "args": ["makes", "aurelia"],
        "passThroughArgs": true,
    },
    "build": {
        "cmd": "npm",
        "args": ["run", "build"],
        "passThroughArgs": false,
    },
    "help": {
        "cmd": "help",
        "args": [],
        "passThroughArgs": true,
    },
};
