const { scripts } = require('../package.json');

module.exports = function () {
    const commands = {};
    for (const script in scripts) {
        const args = scripts[script].split(/("[^"]*"|'[^']*'|[\S]+)+/).filter(v => v.trim().length);
        commands[script] = {
            cmd: 'npm',
            args: ['run', script, ...args],
            passThroughArgs: true,
        }
    }
    return commands;
}
