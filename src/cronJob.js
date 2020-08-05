const cron = require('cron');

module.exports = function cronLoader(cronTime, onTickFunction) {
  return new cron.CronJob({
    cronTime,
    onTick: onTickFunction,
    start: true,
    timeZone: 'Europe/Paris',
  });
};
