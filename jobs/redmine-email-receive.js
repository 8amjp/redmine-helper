require('dotenv').config();
const { exec } = require('child_process');

module.exports = function() {
    exec(process.env.REDMINE_EMAIL_RECEIVE_COMMAND, (error, stdout, stderr) => {
        //
    });
}
