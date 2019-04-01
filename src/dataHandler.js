const redis = require('redis');
const client = redis.createClient();

const _addNewMember = (email, data) => {
    return new Promise(async (resolve) => {
        client.set(email, JSON.stringify(data), redis.print);
        resolve();
    });
};

const _removeMember = (email) => {
    return new Promise(async (resolve) => {
        client.del(email);
        resolve();
    });
};

const DataHandler = (() => {
    return {
        addNewMember: _addNewMember,
        removeMember: _removeMember
    };
})();

module.exports = DataHandler;