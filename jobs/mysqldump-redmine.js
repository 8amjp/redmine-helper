require('dotenv').config();
const { exec } = require('child_process');
const moment = require('moment');
moment.locale('ja');
const command = process.env.REDMINE_MYSQLDUMP_COMMAND.replace('YYYYMMDD_HHmmss', moment().format('YYYYMMDD_HHmmss'));

module.exports = function() {
    exec(command, (error, stdout, stderr) => {
        //
    });
}