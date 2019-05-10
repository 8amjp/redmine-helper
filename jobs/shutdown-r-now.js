require('dotenv').config();
const { exec } = require('child_process');

module.exports = function() {
    exec(process.env.SHUTDOWN_COMMAND, (error, stdout, stderr) => {
        //
    });
}