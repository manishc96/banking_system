const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const queries = require('../controller/login')
router.post('/login', (req, res) => {
    queries.userLogin.getOne(req.body.userName, req.body.password).then((user) => {
        if (user) {
            let token = jwt.sign({ user: this.user, isBanker: user.isBanker }, process.env.SERCERT_KEY)
            console.log(process.env.SERCERT_KEY);
            res.header(`x-auth-token`, token).send({
                message: "login successful", d: token, userId: user.id, isBanker: user.isBanker
            })
        }
        else {
            res.json({ message: 'invalid user or password' })
        }
    }).catch((ex) => {
        console.log(ex.message)
    })

});
module.exports = router;
