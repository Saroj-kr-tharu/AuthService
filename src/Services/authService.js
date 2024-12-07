
const AuthRepo = require('../Repository/authRepository');

const auth = new AuthRepo();
const bcrypt = require('bcrypt');

const createService = async (data) => {
    try {
        const res = await auth.create(data);
        return res;
    } catch (error) {
        console.log("Something went wrong in service layer (create)");
        throw error;
    }
}

const deleteService = async (id) => {
    try {
        const res = await auth.Delete(id);
        return res;
    } catch (error) {
        console.log("Something went wrong in service layer (delete service)");
        throw error;
    }
}

const createToken = async() => {
    try {
        const match = bcrypt.compareSync(plainpasword, hash);
        if(!match)
            throw ("Password is not match");
        return match;
    } catch (error) {
        console.log("Something went wrong in service layer (CheckPassword)");
        throw error;
    }
}

const loginService = async (data) => {
    try {
        const user = await getUserByEmailService(data.email);

        const checkPass = checkPasswordService(data.password, user.password)

        let res = (`Successfully login in with ${data.email} ${data.password}`)
        return res;
    } catch (error) {
        console.log("Something went wrong in service layer (login service)");
        throw error;
    }
}

const getUserByEmailService = async(email) => {
    try {
        const user = await auth.getByEmail(email);
        if(!user)
            throw ("Email is not present");
        return user;
    } catch (error) {
        console.log("Something went wrong in service layer (geting user by email service)");
        throw error;
    }
}

const checkPasswordService = (plainpasword, hash) => {
    try {
        const match = bcrypt.compareSync(plainpasword, hash);
        if(!match)
            throw ("Password is not match");
        return match;
    } catch (error) {
        console.log("Something went wrong in service layer (CheckPassword)");
        throw error;
    }
}



module.exports = {
    createService,
    deleteService,
    loginService
}