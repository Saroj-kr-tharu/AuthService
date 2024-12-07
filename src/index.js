const express  = require('express');

const appRoutes= require("./Routes/index");
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');


const { User } = require('./models/index');
const bcrypt = require('bcrypt')

const serverSetupAndStart = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api',appRoutes);

    app.listen(PORT, async()=> {
        console.log(`Server Started at ${PORT}`);
        
        
        
    })

}


serverSetupAndStart();

