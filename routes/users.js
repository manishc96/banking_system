const express = require('express');
const router = express.Router();
const queries = require('../controller/user');

router.get('/', (req, res) => {

    queries.user.getAll().then((users) => {
        res.json(users)
    });
});
router.post('/', async (req, res) => {
    queries.user.create(req.body).then((result) => {
        res.status(201).send({ message: 'created' });
    }
    )
});
router.get('/allinfo/:id', async (req, res) => {
    queries.user.getTransaction(req.params.id).then((result) => {
        res.send(result);
    })
});

router.get('/:id', (req, res) => {
    queries.user.getUser(req.params.id).then((result) => {
        res.send(result);
    })
})

module.exports = router;