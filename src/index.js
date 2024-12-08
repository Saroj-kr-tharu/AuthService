const express = require('express');

const appRoutes = require("./Routes/index");
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const { DBSYNC } = require("./config/serverConfig");


const serverSetupAndStart = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

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

