const jwt = require('jsonwebtoken');

function userAuth(req, res, next) {
    let token = req.header('x-auth-token');
    if (!token) { return res.status(402).send({ message: 'ACCESS DENIED, there is no token' }) }
    let decode = jwt.verify(token, 'shhhh');
    next();
}
module.exports = userAuth;