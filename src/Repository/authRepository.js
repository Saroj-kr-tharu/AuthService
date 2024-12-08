
const { User, Roles } = require('../models/index');


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
                    email: data.email
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


    async checkRole(data) {
        try {
            const user = await User.findOne({
                where: {
                    email: data.email
                }
            });
            if (!user)
                return (" User is not present ");

            const role = await Roles.findOne({
                where: {
                    name: data.role
                }
            })
            if (!role)
                return (" Role is not present ");

            const response = await user.hasRole(role.id);
            return response;

        } catch (error) {
            console.log("Something went wrong in Repo level (get by email) ");
            throw (error);
        }
    }

    async addRole(data) {
        try {
            const user = await User.findOne({
                where: {
                    email: data.email
                }
            });
            if (!user)
                return (" User is not present ");

            const role = await Roles.findOne({
                where: {
                    name: data.role
                }
            })
            if (!role)
                return (" Role is not present ");

            const response = await user.addRole(role.id);
            return response;

        } catch (error) {
            console.log("Something went wrong in Repo level (get by email) ");
            throw (error);
        }
    }

}


module.exports = AuthRepo;