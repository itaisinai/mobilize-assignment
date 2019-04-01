const express = require('express');

const dataHandler = require('./dataHandler');
const mailHandler = require('./mailHandler');
const config = require('./config');
const batchPromises = require('batch-promises');
const router = express.Router();

// new member
router.get('/add', async (req, res) => {
    const emails = [req.query['email']] || req.query['email'];
    const name = req.query['name'] || 'itai';

    await batchPromises(config.batchSize, emails, email => new Promise(async (resolve) => {
        await dataHandler.addNewMember(email, {name});
        await mailHandler.newUserConfirmation(email, name);
        resolve();
    }));
    res.send('Emails sent to the new members');
});


// remove member
router.get('/remove', async (req, res) => {
    const email = req.query['email'] || 'itai.sinai@gmail.com';

    const result = await dataHandler.removeMember(email);
    res.send(result);
});

module.exports = router;
