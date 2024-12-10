const {db} = require('../db');
const Utils = require('./utils');

exports.getAll =
async (req, res) => {
    res
    .status(200)
    .send(users
        .map(({id, firstname, lastname}) => {return id, firstname, lastname}));
}

exports.getById =
async (req, res) => {
    const user = await getUser(req, res);
    if (!user) { return res.status(404).send({Error: 'User not found'});}
    res.send(user);
}

const getUser = 
async (req, res) => {
    const idNumber = parseInt(req.params.id);
    if(isNaN(idNumber)) {
        res.status(400).send({Error: `ID must be a whole number: ${idNumber}`});
        return null;
    }
    const user = await db.users.findByPk(idNumber);
    if(!user) {
        res.status(404).send({Error: `user with this id not found: ${idNumber}`});
        return null;
    }
    return user;
}