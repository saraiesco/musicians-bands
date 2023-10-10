const { db } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const Queen = await Band.create({name: "Queen", genre: "rock"})
        expect(Queen.name).toBe("Queen");
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const marthaArgerich = await Musician.create({name: "Martha Argerich", instrument: "Piano"})
        expect(marthaArgerich.name).toBe("Martha Argerich");
    })

    test('can update a Band', async () => {
        // TODO - test updating a band
        const foundBand = await Band.findByPk(1)
        const updateResult = await foundBand.update({name: "Destiny's Child", genre: "R&B/Soul"})
        expect(updateResult.genre).toBe("R&B/Soul");
    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        const foundMusician = await Musician.findOne({where: {name: "Martha Argerich"}})
        const updateResult = await foundMusician.update({name: "Pablo Casals", instrument: "Cello"})
        expect(updateResult.name).toBe("Pablo Casals");
    })

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        const deletedBand = await Band.destroy({where: {name: "Destiny's Child"}})
        expect(deletedBand).toBe(1);
    })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        const foundMusician = await Musician.findOne({where: {name: "Pablo Casals"}})
        const deletedMusician = await foundMusician.destroy()
        expect(deletedMusician).toBe(foundMusician);
    })
})