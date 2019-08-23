const commands = require('./commands');
const scriptCommands = require('./script-commands');
// const helps = require('./helps');

const allCommands = { ...commands, ...scriptCommands() };

module.exports = function (cmd, args) {
    const command = findCommand(cmd);
    if (command.passThroughArgs) {
        command.args = [...command.args, ...args];
    }
    return { cmd: command.cmd, args: command.args };
};

function findCommand(cmd) {
    let command = { ...allCommands[cmd] };
    if (!command || !command.cmd) {
        command = {
            ...commands['help'],
            ...{ passThroughArgs: false }
        };
    }
    return command;
}
