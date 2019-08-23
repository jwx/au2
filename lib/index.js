const args = require('./args');
const command = require('./command');
const run = require('./run');
const helps = require('./helps');

async function au2() {
    const input = args();
    const cmd = command(input.cmd, input.args);
    console.log(cmd);
    if (cmd.cmd === 'help') {
        helps(cmd.cmd, cmd.args);
    } else {
       await run(cmd.cmd, cmd.args);
    }
}

module.exports = au2;
