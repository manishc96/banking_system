const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const dotenv = require('dotenv');
dotenv.config();
const user = require('./routes/users');
const userdb = require('./model/user');
const accountsdb = require('./model/accounts')
const accounts = require('./routes/accounts');
const auth = require('./routes/auth');
app.use(express.json());
const port = process.env.PORT || 3000;
userdb.user;
accountsdb.accounts;

app.use('/user/', user);
app.use('/account/', accounts);
app.use('/', auth);
app.listen(port, () => console.log(`this app is working on port number ${port}`));