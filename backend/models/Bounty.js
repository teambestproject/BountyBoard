const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BountySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    reward: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: String,
        required: true
    },
    claimedBy: {
        type: String
    }
});

const Bounty = mongoose.model('bounty', BountySchema);

module.exports = Bounty;
