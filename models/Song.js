const {Sequelize, db, Model, DataTypes} = require('../db');

// TODO - define the Song model
// let Song;


class Song extends Model {};

Song.init({
    name: DataTypes.STRING, 
    instrument: DataTypes.STRING
},{
    sequelize: db,
    modelName: "Song"
})
module.exports = {
    Song
};

module.exports = {
    Song
};