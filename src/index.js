const express = require('express');

const appRoutes = require("./Routes/index");
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');


const db = require("./models/index");
const { User, Roles } = require("./models/index");

const AuthRepo = require('./Repository/authRepository');
const auth = new AuthRepo();


const { DBSYNC } = require("./config/serverConfig");

const data = {
    email: 'a@gmail.com',
    role: 'custumer'
}

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

        // const u1 = await User.findOne({
        //     where: {
        //         email: 's@gmail.com'
        //     }
        // });

        // const r1 = await Roles.findOne({
        //     where: {
        //         name : 'ADMIN'
        //     }
        // });
        // u1.addRole(r1); // add the  Role of user(9) to the role(1)

        // const response = await r1.getUsers(); // get all the detail users of having all the roles 
        // console.log(response);
        

        // const repsonse = await u1.hasRole(1); // check it contain roles or not 
        // console.log(repsonse);
        
        // const rep= await auth.checkRole(data);
        // console.log(rep);
        
        // const rep= await auth.addRole(data);
        // console.log(rep);

    })

}


serverSetupAndStart();

