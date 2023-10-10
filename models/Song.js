const {Sequelize, db, DataTypes, Model} = require('../db');

// TODO - define the Song model
class Song extends Model{}

Song.init({
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    length: DataTypes.INTEGER,
},{
    sequelize: db,
    modelName: "Song"
})

db.sync()

module.exports = {
    Song
};