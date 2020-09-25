const express = require('express');
const router = express.Router();
const queries = require('../controller/accounts');

router.get('/', (req, res) => {

    queries.accounts.getAll().then(users =>
        res.json(users));
});
router.post('/', (req, res) => {
    queries.accounts.create({ user_id: req.body.user_id, accType: req.body.accType }).then((result) => {
        res.status(201).send({ message: 'created' });
    })
});
router.get('/:id', (req, res) => {
    queries.accounts.getOne(req.params.id).then(result =>
        res.json(result));
});

router.put('/withdraw/:id', async (req, res) => {
    queries.accounts.withdrawOne(req.params.id, req.body.withdraw)
        .then((user) => {
            if (user) {
                res.json({ message: `updated` })
            }
            else {
                res.status(400).json({ message: `withdrawal amount should be less than balance_amount` })
            }
        });
})
router.put('/deposit/:id', async (req, res) => {
    queries.accounts.depositOne(req.params.id, req.body.deposit)
        .then((user) => {
            res.json({ message: `updated` })
        })
});



module.exports = router;