const app = require('express')();
const port = 8080;
const swaggerUI = require('swagger-ui-express');
const yamljs = require('yamljs');
/* const swaggerDocument = require('./docs/swagger.json'); */
const swaggerDocument = yamljs.load('./docs/swagger.yaml');

const games = 
[
    {id: 1, name: "Team Fortress 2", releaseEU : "2007", description: "Pootispencarhiar. class based lootbox shooter", reviewscore: 86},{id: 2, name: "Sonic the Hedgehog", releaseEU : "1991", description: "Speedy blue platformer", reviewscore: 77},
    {id: 3, name: "S.T.A.L.K.E.R.: Shadow of Chernobyl ", releaseEU : "2007", description: "shoot in ukraine", reviewscore: 82},,
    {id: 4, name: "S.T.A.L.K.E.R. 2: Heart of Chornobyl ", releaseEU : "2007", description: "shoot in ukraine again", reviewscore: 78},
];

app.get('/games', (req, res) => {
    res.send(games);
})

app.get('/games/:id', (req, res) => {
    if(typeof games[req.params.id] === 'undefined') {
        return res.status(404).send({Error: 'Game not found'});
    }
    res.send(games[req.params.id-1]);
})

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(port, () => {console.log(`Backend api jookseb aadressil: http://localhost:${port}`);});