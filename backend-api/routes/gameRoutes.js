const GamesController = require("../controllers/GamesController");
const UsersController = require("../controllers/UsersController");

module.exports = (app) => {
    app.route("/games")
    .get(GamesController.getAll)
    .post(GamesController.create)
    app.route("/games/:id")
    .get(GamesController.getById)
    .put(GamesController.editById)
    .delete(GamesController.deleteById)

    app.route("/users")
    .get(UsersController.getAll)
    .post(UsersController.create)
    app.route("/users/:id")
    .get(UsersController.getById)
    .put(UsersController.editById)
    .delete(UsersController.deleteById)
}