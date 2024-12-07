
const { User } = require('../models/index');


class AuthRepo {

    async create(data) {
        try {
            const res = await User.create(data);
            return res;
        } catch (error) {
            console.log("Something went wrong in Repo level (create) ");
            throw (error);
        }
    }

    async Delete(data) {
        try {

            const res = await User.destroy({
                where: {
                    id: data
                },
            });

            return res;
        } catch (error) {
            console.log("Something went wrong in Repo level (delete) ");
            throw (error);
        }
    }


    async getByEmail(emaildata) {
        try {
            const user = await User.findOne({
                where: {
                    email: emaildata
                }
            });
            return user;
        } catch (error) {
            console.log("Something went wrong in Repo level (get by email) ");
            throw (error);
        }
    }

    

   

    

}


module.exports = AuthRepo;