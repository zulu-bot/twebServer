const express = require('express');
const router = express.Router();

const ctrlUSer = require('../controllers/user.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUSer.register);
router.post('/authenticate', ctrlUSer.authenticate);
router.get('/userProfile', jwtHelper.verifyJwtToken, ctrlUSer.userProfile);

module.exports = router;