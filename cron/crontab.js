var CronJob = require('cron').CronJob;

// // for System
new CronJob('0 0 4 * * *', require('../jobs/shutdown-r-now'), null, true, 'Asia/Tokyo');

// // for Redmine
new CronJob('0 0 12 * * 1-5', require('../jobs/mysqldump-redmine'), null, true, 'Asia/Tokyo');
new CronJob('0 0 18 * * 1-5', require('../jobs/mysqldump-redmine'), null, true, 'Asia/Tokyo');
new CronJob('0 */2 8-17 * * 1-5', require('../jobs/redmine-email-receive'), null, true, 'Asia/Tokyo');
