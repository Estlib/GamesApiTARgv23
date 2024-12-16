const {db} = require('../db');
const Utils = require('./utils');

exports.getAll =
async (req, res) => {
    const games = await db.games.findAll();
    console.log(games)
    res
    .status(200)
    .send(games
        .map(({id, name}) => {return {id, name}}));
}

exports.getById =
async (req, res) => {
    const game = await getGame(req, res);
    if (!game) { return res.status(404).send({Error: 'Game not found'});}
    res.send(game);
}

exports.create =
async (req, res) => {
    if (!req.body.name || 
        !req.body.releaseEU || 
        !req.body.description || 
        !req.body.reviewscore) 
        {
            return res.status(400).send({error: 'Missing one or all parameters'});
        }
const newGame = {
    name: req.body.name,
    releaseEU: req.body.releaseEU,
    description: req.body.description,
    reviewscore: req.body.reviewscore
}
const createdGame = await db.games.create(newGame);
    return res
    .status(201)
    .location(`${Utils.getBaseUrl(req)}/games/${createdGame.id}`)
    .send(createdGame);
}

exports.editById = 
async (req, res) => {
    const game = await getGame(req, res);
    if (!game) {return}
    if (!req.body.name || 
        !req.body.releaseEU || 
        !req.body.description || 
        !req.body.reviewscore) 
        {
            return res.status(400).send({error: 'Missing one or all parameters'});
        }
    game.name = req.body.name;
    game.releaseEU = req.body.releaseEU;
    game.description = req.body.description;
    game.reviewscore = req.body.reviewscore;
    await game.save();
    return res
    .location(`${Utils.getBaseUrl(req)}/games/${game.id}`)
    .send(game);
}

exports.deleteById = 
async (req, res) => {
    const game = await getGame(req, res);
    if(!game) {return}
    await game.destroy();
    res.status(204).send({Error: 'No Content'});

}

const getGame = 
async (req, res) => {
    const idNumber = parseInt(req.params.id);
    if(isNaN(idNumber)) {
        res.status(400).send({Error: `ID must be a whole number: ${idNumber}`});
        return null;
    }
    const game = await db.games.findByPk(idNumber);
    if(!game) {
        res.status(404).send({Error: `game with this id not found: ${idNumber}`});
        return null;
    }
    return game;
}