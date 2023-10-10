// const { DataTypes } = require('sequelize');
const {Sequelize, sequelize, Model, DataTypes} = require('../db');

// TODO - define the Musician model
// let Musician;

class Musician extends Model {}

Musician.init(
    {
        name: DataTypes.STRING,
        instrument: DataTypes.STRING
    },
    {
        sequelize : sequelize, 
        modelName : 'Musician'
    }
);

sequelize.sync();

module.exports = {
    Musician
};