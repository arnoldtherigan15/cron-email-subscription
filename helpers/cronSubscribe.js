let sendEmail = require('./sendEmail')
module.exports = (email) => {
    console.log('masuk cron');
    
    let CronJob = require('cron').CronJob
    let i = 0
    let job = new CronJob('*/5 * * * * *', function() {
        i++
        sendEmail(email)
        if(i == 2) {
            console.log('cron berhenti');
            
            job.stop()
        }
    }, null, true, 'America/Los_Angeles')
    job.start();
}