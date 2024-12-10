require('dotenv').config();
const port = process.env.PORT || 8080;
const host = 'localhost';
const express = require('express');
const cors = require("cors")
const swaggerUI = require('swagger-ui-express');
const yamljs = require('yamljs');
/* const swaggerDocument = require('./docs/swagger.json'); */
const swaggerDocument = yamljs.load('./docs/swagger.yaml');
const app = express();

const { db,sync } = require("./db")

// const games = 
// [
//     {
//         id: 1, 
//         name: "Team Fortress 2", releaseEU : "2007", description: "Pootispencarhiar. class based lootbox shooter", reviewscore: 86
//     },
//     {
//         id: 2, 
//         name: "Sonic the Hedgehog", releaseEU : "1991", description: "Speedy blue platformer", 
//         reviewscore: 77
//     },
//     {
//         id: 3, 
//         name: "S.T.A.L.K.E.R.: Shadow of Chernobyl ", 
//         releaseEU : "2007", description: "shoot in ukraine", 
//         reviewscore: 82
//     },        
//     {
//         id: 4, 
//         name: "S.T.A.L.K.E.R. 2: Heart of Chornobyl ", 
//         releaseEU : "2007", description: "shoot in ukraine again", 
//         reviewscore: 78
//     },
// ];

app.use(cors());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use(express.json());

app.get('/', (req, res) => {
    res.send(
        `Backend jookseb. Dokumentatsioon asub <a href="http://${host}:${port}/docs">SIIN</a>`
    )
})

require("./routes/gameRoutes")(app)

app.listen(port, async () => {
    if (process.env.SYNC === 'true') {await sync();}
    console.log(`Backend api jookseb aadressil: http://${host}:${port}`);});
