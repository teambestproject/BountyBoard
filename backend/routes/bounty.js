const express = require('express');
const router = express.Router();
const validateBountyInput = require('../validation/bounty');

const Bounty = require('../models/Bounty');

router.post('/create', function (req, res) {
    const { errors, isValid } = validateBountyInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    Bounty.findOne({
        title: req.body.title
    }).then(bounty => {
        if (bounty) {
            return res.status(400).json({
                title: 'Bounty with this title exists'
            })
        } else {
            const newBounty = {
                title: req.body.title,
                description: req.body.description,
                reward: req.body.reward,
                createdBy: req.body.createdBy
            };
            Bounty.create(newBounty)
                .then(function (dbBounty) {
                    res.json(dbBounty);
                })
                .catch(function (err) {
                    res.json(err);
                });
        }
    });
});

router.get('/bounty/:id', function (req, res) {
    Bounty.findOne({ _id: req.params.id })
        .then(function (dbBounty) {
            res.json(dbBounty);
        })
        .catch(function (err) {
            res.json(err);
        });
});

router.post('/claim', function (req, res) {
    Bounty.findOne({
        _id: req.body._id
    }).then(bounty => {
        if (bounty.claimedBy !== null) {
            return res.status(400).json({
                claimed: "This bounty has already been claimed"
            });
        } else {
            const query = { _id: req.body._id };
            const update = { $set: { claimedBy: req.body.user } };
            Bounty.update(query, update)
                .then(function (dbBounty) {
                    res.json(dbBounty);
                })
                .catch(function (err) {
                    res.json(err);
                });
        }
    });
});

router.post('/myClaimedBounty', function (req, res) {
    Bounty.find({ claimedBy: req.body.uid })
        .then(function (dbBounty) {
           return res.json(dbBounty);
        })
        .catch(function (err) {
           return res.json(err);
        });
})

router.post('/myPostedBounty/', function (req, res) {
    Bounty.find({ createdBy: req.body.uid })
        .then(function (dbBounty) {
           return res.json(dbBounty);
        })
        .catch(function (err) {
           return res.json(err);
        });
})

router.get('/allBounty', function (req, res) {
    Bounty.find({})
        .then(function (dbBounties) {
            return res.json(dbBounties);
        })
        .catch(function (err) {
            return res.json(err);
        });
});

module.exports = router;
