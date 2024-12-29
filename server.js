const express = require("express");
const app = express();
const CUKIparser = require('cookie-parser');
const COR = require('cors');
const port = 4000

app.use(COR({
    origin: 'http://localhost:5173',   //giving the backend access to the frontend URL 
    credentials: true                //for authentication
}));

app.use(express.json());
app.use(CUKIparser());
require('./Connection/ntw.js');

const AuthRoutes = require('./Routes/user.js');
const VidRoutes = require('./Routes/video.js');
const CmntRoutes = require('./Routes/comment.js');



app.use('/auth', AuthRoutes);
app.use('/media', VidRoutes,);
app.use('/cmtApi', CmntRoutes);


app.listen(port,()=>{ console.log(`backend is running on ${port}`);});