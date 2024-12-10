const express = require('express');

const appRoutes = require("./Routes/index");
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const { DBSYNC } = require("./config/serverConfig");


const serverSetupAndStart = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // app.get('/api/v1/info', (req, res) => {
    //     return res.json({ message: 'Response from routes Auth Service info service' });
    // });


    // app.get('/api/v1/home', (req, res) => {
    //     try {
    //         return res.status(200).json({
    //             message: 'Hitting the auth Service',
    //         });
    //     } catch (error) {
    //         return res.status(200).json({
    //             message: 'error',
    //         });
    //     }
    // });

    app.use('/api', appRoutes);

    app.listen(PORT, async () => {
        console.log(`Server Started at ${PORT}`);

        // if (DBSYNC) {
        //     db.sequelize.sync({ alter: true })
        //         .then(() => console.log('Database synchronized successfully'))
        //         .catch(err => console.error('Database synchronization failed:', err));
        // }

    })

}


serverSetupAndStart();

