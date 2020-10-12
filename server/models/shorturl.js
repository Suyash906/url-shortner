const mongoose = require('mongoose');
const {DEFAULT_BASE_SHORT_URL} = require('../config/constants');

const shortUrlSchema = mongoose.Schema({
    orignalUrl: {
        type: String,
        required : true,
        unique : true
    },shortBaseUrl: {
        type: String,
        default: DEFAULT_BASE_SHORT_URL
    },
    urlCode: {
        type: String,
        required : true,
        unique : true
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('ShortUrl', shortUrlSchema);