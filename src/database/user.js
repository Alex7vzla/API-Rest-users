const DB = require('./db.json');
const { saveToDatabase } = require('./utils')

const getAllUsers = () => {
    return DB;
};

const getOneUser = (userId) => {
    const checkId = DB.filter(user => user.id === userId);
    return checkId;
};

const createNewUser = (newUser) => {
    const isAlreadyAdded = DB.findIndex(user => user.name === newUser.name) > -1;
    if(!isAlreadyAdded){
        return;
    };
    DB.push(newUser);
    saveToDatabase(DB);
    return newUser;
};



module.exports = {getAllUsers, createNewUser, getOneUser};