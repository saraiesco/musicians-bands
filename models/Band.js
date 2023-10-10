const {Sequelize, db, DataTypes, Model} = require('../db');

// TODO - define the Band model
class Band extends Model {}

Band.init({
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
},{
    sequelize: db,
    modelName: "Band"
})

db.sync()

module.exports = {
    Band
};