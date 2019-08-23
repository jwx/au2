import args from './args';
import command from './command';
import run from './run';
import help from './help';

async function au2() {
    const input = args();
    const cmd = command(input.cmd, input.args);
    if (cmd.cmd === 'help') {
        help(cmd.cmd, cmd.args);
    } else {
       await run(cmd.cmd, cmd.args);
    }
}

module.exports = au2;
