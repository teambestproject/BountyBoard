const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateBountyInput(data) {
    let errors = {};
    data.title = !isEmpty(data.title) ? data.title : '';
    data.description = !isEmpty(data.description) ? data.description : '';
    data.reward = !isEmpty(data.reward) ? data.reward : '';

    if(!Validator.isLength(data.title, {min: 5, max: 50})) {
        errors.title = 'Title must be between 5 and 50 characters';
    }

    if(Validator.isEmpty(data.title)) {
        errors.title = 'Title field is required';
    }

    if(!Validator.isLength(data.description, {min: 5, max: 1000})) {
        errors.description = 'Description must be between 5 and 1000 characters';
    }

    if(Validator.isEmpty(data.description)) {
        errors.description = 'Description field is required';
    }

    if(!Validator.isLength(data.reward, {min: 5, max: 1000})) {
        errors.reward = 'Reward must be between 5 and 1000 characters';
    }

    if(Validator.isEmpty(data.reward)) {
        errors.reward = 'Reward field is required.'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}
