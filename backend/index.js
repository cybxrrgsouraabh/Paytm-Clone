const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mainRouter = require('./routes/user');
const accountRouter = require('./routes/account');

app.use(cors());
app.use(express.json());

app.use('/api/vi/user', mainRouter);
app.use('/api/vi/account', accountRouter);

app.listen(3000);
