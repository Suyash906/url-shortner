const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const ShortUrl = require('../models/shorturl');
const shortid = require("shortid");

const getShortCode = () => shortid.generate();

router.post('/', async (req, res, next) => {
    const {
        orignalUrl,
        shortBaseUrl
    } = req.body;
    if (!validUrl.isUri(shortBaseUrl)) {
        return res.status(404).json('Invalid URL format : Short Base URL');
    }
    if (!validUrl.isUri(orignalUrl)) {
        return res.status(404).json('Invalid URL format : Orignal URL');
    }
    
    try {
        let existingUrl = await ShortUrl.findOne({orignalUrl:orignalUrl}).exec();

        if (existingUrl) {
            const shortURL = `${existingUrl.shortBaseUrl}/${existingUrl.urlCode}`
            const responseObject = {
                orignalUrl,
                shortURL
            }
            res.status(200).json(responseObject);
        } else {
            const urlCode = getShortCode();
            const urlToBeSaved = {
                orignalUrl,
                shortBaseUrl,
                urlCode
            };

            const newUrl = new ShortUrl(urlToBeSaved);
            await newUrl.save();
            
            const shortURL = `${urlToBeSaved.shortBaseUrl}/${urlToBeSaved.urlCode}`
            const responseObject = {
                orignalUrl,
                shortURL
            }
            urlToBeSaved.shortURL = shortURL
            res.status(200).json(responseObject);
        }
    } catch (err) {
        console.log(err);
        res.status(401).json('Invalid User Id');
    }
});

router.get('/:code', (req, res, next) => {
    const responseObject = {
        success: true
    }
    res.status(200).json(responseObject);
});

module.exports = router;