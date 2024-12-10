const {db} = require('../db');
const Utils = require('./utils');

exports.getAll =
async (req, res) => {
    res
    .status(200)
    .send(users
        .map(({id, firstname, lastname}) => {return id, firstname, lastname}));
}

