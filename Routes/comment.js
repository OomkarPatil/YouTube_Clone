const express = require('express');
const router = express.Router();
const CmtCTRL = require('../Controllers/comment.js');
const Auth = require('../Middleware/Authentication.js');

router.post('/comment', Auth, CmtCTRL.AddCmt);
router.get('/comment/:videoid',CmtCTRL.getCmtByVidID);

module.exports = router;