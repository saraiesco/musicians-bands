// const { DataTypes } = require('sequelize');
const {Sequelize, sequelize, Model, DataTypes} = require('../db');

// TODO - define the Song model
// let Song;

class Song extends Model {}

Song.init(
    {
        title: DataTypes.STRING,
        year: DataTypes.INTEGER,
        length: DataTypes.INTEGER
    },
    {
        sequelize : sequelize, 
        modelName : 'Song'
    }
);

sequelize.sync();

module.exports = {
    Song
};