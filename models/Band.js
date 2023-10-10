// const { DataTypes } = require('sequelize');
const {Sequelize, sequelize, Model, DataTypes} = require('../db');

// TODO - define the Band model
// let Band;

class Band extends Model {}

Band.init(
    {
        name: DataTypes.STRING,
        genre: DataTypes.STRING
    },
    {
        sequelize : sequelize, 
        modelName : 'Band'
    }
);

sequelize.sync();


module.exports = {
    Band
};