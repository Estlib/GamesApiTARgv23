const app = require('express')();
const port = 8080;
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');

app.get('/games', (req, res) => {
    res.send(["Team Fortress 2", "Sonic the Edgehog", "STALKER", "STALKER 2"])
})

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(port, () => {console.log(`Backend api jookseb aadressil: http://localhost:${port}`);});