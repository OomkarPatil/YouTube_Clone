const express = require('express');
const router = express.Router();
const Userctrl = require('../Controllers/user.js');

router.post('/signUp', Userctrl.signUp);
router.post('/signIn', Userctrl.signIn);
router.post('/logOut',Userctrl.logOut);

module.exports = router;