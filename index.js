
const app = require("express")();
const port = 8080;
const swaggerUI = require('swagger-ui-express');
const yamljs = require('yamljs');
/* const swaggerDocument = require('./docs/swagger.json'); */
const swaggerDocument = yamljs.load('./docs/swagger.yaml');
var express = require('express')

const games = 
[
    {
        id: 1, 
        name: "Team Fortress 2", releaseEU : "2007", description: "Pootispencarhiar. class based lootbox shooter", reviewscore: 86
    },
    {
        id: 2, 
        name: "Sonic the Hedgehog", releaseEU : "1991", description: "Speedy blue platformer", 
        reviewscore: 77
    },
    {
        id: 3, 
        name: "S.T.A.L.K.E.R.: Shadow of Chernobyl ", 
        releaseEU : "2007", description: "shoot in ukraine", 
        reviewscore: 82
    },        
    {
        id: 4, 
        name: "S.T.A.L.K.E.R. 2: Heart of Chornobyl ", 
        releaseEU : "2007", description: "shoot in ukraine again", 
        reviewscore: 78
    },
];

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(express.json());

app.get('/games', (req, res) => {
    res.send(games);
})

app.get('/games/:id', (req, res) => {
    if(typeof games[req.params.id-1] === 'undefined') {
        return res.status(404).send({Error: 'Game not found'});
    }
    if(typeof games[req.params.id] == null) {
        return res.status(400).send({error: 'invalid game id'});
    }
    res.send(games[req.params.id-1]);
})

app.put('/games/:id', (req, res) => {
    const game = getGame(req, res);
    if(!game) {return}
    if (!req.body.name || 
        !req.body.releaseEU || 
        !req.body.description || 
        !req.body.reviewscore) 
        {
            return res.status(400).send({error: 'Missing game parameters'});
        }
        
    game.name = req.body.name;
    game.releaseEU = req.body.releaseEU;
    game.description = req.body.description;
    game.reviewscore = req.body.reviewscore;
    return res
    .status(201)
    .location(`${getBaseUrl(req)}/games/${game.id}`)
    .send(game);
})

app.post('/games', (req, res) => {
    if (!req.body.name || 
        !req.body.releaseEU || 
        !req.body.description || 
        !req.body.reviewscore) 
        {
            return res.status(400).send({error: 'One or multiple parameters are missing'});
        }
    let game = {
        id: games.length +1,
        name: req.body.name,
        releaseEU: req.body.releaseEU,
        description: req.body.description,
        reviewscore: req.body.reviewscore
    }
    games.push(game);
    res.status(201)
    .location(`${getBaseUrl(req)}/games/${games.length}`)
    .send(game);
})

app.delete('/games/:id', (req, res) => {
    if(typeof games[req.params.id-1] === 'undefined')
    {
        return res.status(404).send({Error: 'Game not found'});
    }

    games.splice(req.params.id-1, 1);

    res.status(204).send({Error: 'No Content'});

})

app.listen(port, () => {console.log(`Backend api jookseb aadressil: http://localhost:${port}`);});

function getBaseUrl(req) {
    return req.connection && req.connection.encrypted ? "https" : "http" + `://${req.headers.host}`;
}
function getGame(req,res) 
{
    const idNumber = parseInt(req.params.id);
    if(isNaN(idNumber)) {
        res.status(400).send({Error:`id not found`});
        return null;
    }
    const game = games.find(game => game.id === idNumber)
    if(!game) {
        res.status(404).send({Error: 'Game not found'});
        return null;
    }
    return game;
}