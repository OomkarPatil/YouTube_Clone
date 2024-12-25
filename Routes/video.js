const express = require('express');
const router = express.Router();
const VidCtrl = require('../Controllers/video.js')
const Auth = require('../Middleware/Authentication.js');

router.post('/video', Auth, VidCtrl.UpldVid);
router.get('/allVid', VidCtrl.GetAllVid);
router.get('/vidbyid/:id',VidCtrl.GetVidByID);
router.get('/:userId/channel', VidCtrl.GetAllVideoByUserID);

module.exports = router;