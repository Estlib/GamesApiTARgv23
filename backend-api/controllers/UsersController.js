const {db} = require('../db');
const Utils = require('./utils');

exports.getAll =
async (req, res) => {
    const users = await db.users.findAll();
    res
    .status(200)
    .send(users
        .map(({id, firstname, lastname}) => {return {id, firstname, lastname}}));
}

exports.getById =
async (req, res) => {
    const user = await getUser(req, res);
    if (!user) { return res.status(404).send({Error: 'User not found'});}
    res.send(user);
}

exports.editById = 
async (req, res) => {
    const user = await getUser(req, res);
    if (!user) {return}
    if (!req.body.firstname || 
        !req.body.lastname || 
        !req.body.username || 
        !req.body.password) 
        {
            return res.status(400).send({error: 'Missing one or all parameters'});
        }
    user.firstname = req.body.firstname;
    user.lastname = req.body.lastname;
    user.username = req.body.username;
    user.password = req.body.password;
    await user.save();
    return res
    .status(201)
    .location(`${Utils.getBaseUrl(req)}/users/${user.id}`)
    .send(user);
}

exports.create =
async (req, res) => {
    if (!req.body.firstname || 
        !req.body.lastname || 
        !req.body.username || 
        !req.body.password) 
        {
            return res.status(400).send({error: 'Missing one or all parameters'});
        }
const newUser = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    password: req.body.password
}
const createdUser = await db.users.create(newUser);
    return res
    .status(201)
    .location(`${Utils.getBaseUrl(req)}/users/${createdUser.id}`)
    .send(createdUser);
}

exports.deleteById = 
async (req, res) => {
    const user = await getUser(req, res);
    if(!user) {return}
    await user.destroy();
    res.status(204).send({Error: 'No Content'});

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