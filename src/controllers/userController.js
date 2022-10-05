const userService = require('../services/userService');

const getAllUsers = (req, res) => {
    const allUsers = userService.getAllUsers();
    res.send({ status: 200, data: allUsers})
};

const getOneUser = (req, res) =>{
    const user = userService.getOneUser(req.params.userId);
    res.send({ status:200, data: user})
};

const createNewUser = (req, res) => {
    const { body } = req;
//Validation data input
    if(!body.first_name || !body.last_name || !body.email || !body.password || !body.birthday){
        return;
    }
//Model to create
    const newUser = {
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        password: body.password,
        birthday: body.birthday
    };

    const createUser = userService.createNewUser(newUser);
    res.status(201).send({status:'OK', data:createUser});
};

const updateOneUser = (req, res) => {
    const updateUser = userService.updateOneUser(req.params.userId);
    res.send('Update an User')
};

const deleteOneUser = (req, res) => {
    userService.deleteOneUser(req.params.userId);
    res.send('Delete an User')
};

module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser
}