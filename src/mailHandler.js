const config = require('./config');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(config.mailCredentials.sendgrip_api_key);

const _newUserConfirmation = (newUserEmail, name) => {
    return new Promise(async (resolve, reject) => {
        try {
            const msg = {
                to: newUserEmail,
                from: config.mailCredentials.senderMail,
                subject: config.mailCredentials.subject,
                text: `Hi ${name}, welcome to mobilize!`
            };
            await sgMail.send(msg);
            console.log(`added ${name}`);
            resolve(`Confirmation email is sending right now to ${newUserEmail}!`);
        }
        catch (e) {
            reject(e);
        }
    });
};

const MailHandler = (() => {
    return {
        newUserConfirmation: _newUserConfirmation
    };
})();

module.exports = MailHandler;