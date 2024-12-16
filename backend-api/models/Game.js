module.exports = (sequelize, DataTypes) => {
    const Game = sequelize.define(
        // name: Super Mario Bros.
        // releaseEU: '1985'
        // description: italian spaghetti gaem
        // reviewscore: '78'
        'Game',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            releaseEU: {
                type: DataTypes.DATEONLY,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            reviewscore: {
                type: DataTypes.INTEGER,
                allowNull: false
            }

        }
    )
    console.log(Game === sequelize.models.Game)
    return Game;
}