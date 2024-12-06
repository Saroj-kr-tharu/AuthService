const express  = require('express');

const appRoutes= require("./Routes/index");
const bodyParser = require('body-parser');

const router = express.Router();

const PORT= 3002;

const serverSetupAndStart = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api',appRoutes);

    app.listen(PORT, ()=> {
        console.log(`Server Started at ${PORT}`);
        
    })

}


serverSetupAndStart();

