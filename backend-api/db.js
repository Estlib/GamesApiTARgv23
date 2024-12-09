db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.games = require("./models.game")(sequelize, DataTypes);
db.users = require("./models.user")(sequelize, DataTypes);

const sync = (async () => {
    await sequelize.sync({alter: true});
})