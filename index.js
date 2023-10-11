const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require("./models/Song")
// Define associations here

//one to many
Band.hasMany(Musician);
Musician.belongsTo(Band);

//many to many
Song.belongsToMany(Band, {through: "bandsong"});
Band.belongsToMany(Song, {through: "bandsong"});

module.exports = {
    Band,
    Musician,
    Song
};
