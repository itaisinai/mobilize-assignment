const express = require('express');
const indexRoute = require('./index');
const membersRoute = require('./membersManagement');
const app = express();
const port = 3000;

app.use('/', indexRoute);
app.use('/members', membersRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));