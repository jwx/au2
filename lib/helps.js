const commands = require('./commands');
const scriptCommands = require('./script-commands');

const helps = {
    "new": {
        description: "Creates a new Aurelia 2 app. It uses makes [https://makes.js.org] for scaffolding.\n",
        args: [
            { '<app-name>': "Name of your app (and folder)", },
            { 'shortcut list': "A long list of short cuts which will be presented when run" },
        ],
    },
    "build": {
        description: "Builds the app.\n",
        args: [
            { '--prod': "Build for production", },
        ],
    },
};

const allCommands = { ...commands, ...scriptCommands() };

module.exports = function (arg) {
    for (const cmd in commands) {
        const help = helps[cmd];
        if (help) {
            outputHelp(cmd, help);
        }
    }
    for (const cmd in scriptCommands) {
        const help = helps[cmd];
        if (help) {
            outputHelp(help);
        } else {
            const h = scriptCommands[cmd];
            const a = h.args.map(v => `${v.description}  ${v.description}`).join('\n');
            outputHelp(`${cmd}(npm script command)`, { description: `${a} ` })
        }
    }
};

function outputHelp(cmd, help) {
    console.log('Command:   ', cmd);
    console.log('           ', help.description);
    if (help.args && help.args.length) {
        console.log('Arguments: ', help.args);
    }
    console.log('\n');
}
