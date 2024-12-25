const express = require("express");
const app = express();
const CUKIparser = require('cookie-parser')
const port = 3000

app.use(express.json());
app.use(CUKIparser());
require('./Connection/ntw.js');

const AuthRoutes = require('./Routes/user.js');
const VidRoutes = require('./Routes/video.js');
const CmntRoutes = require('./Routes/comment.js');


app.use('/auth', AuthRoutes);
app.use('/Api', VidRoutes);
app.use('/cmtApi', CmntRoutes);

app.listen(port,()=>{ console.log("backend is started on port:3000");});