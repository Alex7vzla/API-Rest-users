const user = require('../database/user');
const { v4: uuid } = require('uuid');

const getAllUsers = () => {
    const allUsers = user.getAllUsers();
    return allUsers
}
const getOneUser = (userId) => {
    const OneUser = user.getOneUser(userId);
    return OneUser;
}
const createNewUser = (newUser) => {
    const userToInsert = {
        id: uuid(),
        ...newUser,
        createdAt: new Date().toLocaleString("en-US", { timezone: "UTC"}),
        updateAt: new Date().toLocaleString("en-US", { timezone: "UTC"})
    }

    const createdUser = user.createNewUser(userToInsert);
    return createdUser;
}
const updateOneUser = () => {
    return
}
const deleteOneUser = () => {
    return
}

module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser
}