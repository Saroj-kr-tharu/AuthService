const express = require('express');

const appRoutes = require("./Routes/index");
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');


const db = require("./models/index");
const { User, Roles } = require("./models/index");



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

        const u1 = await User.findByPk(1);
        const r1 = await Roles.findByPk(1);
        u1.addRole(r1);


    })

}


serverSetupAndStart();

