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
        const testBand = await Band.create({name: 'Nirvana', genre: 'Alternative Rock'})
        expect(testBand.name).toBe('Nirvana');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const testMusician = await Musician.create({name: 'Hendrix', instrument: 'Guitar'})
        expect(testMusician.instrument).toBe('Guitar');
    })

    test('can create a Song', async () => {
        // TODO - test creating a musician
        const testSong = await Song.create({title: 'Survivor', year: 2018, length: 3})
        expect(testSong.title).toBe('Survivor');
    })

    test('can update a Band', async () => {
        // TODO - test updating a band
        const nBand = await Band.create({name: 'Nirvana', genre: 'Punk Rock'})
        const updatedBand = await nBand.update(
            {
                genre: 'Alternative Rock'
            }
        )
        expect(updatedBand.genre).toBe('Alternative Rock');
    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        const nMusician = await Musician.create({name: 'Beethoven', instrument: 'Horn'})
        const updatedMusician = await nMusician.update(
            {
                instrument: 'Piano'
            }
        )
        expect(updatedMusician.instrument).toBe('Piano');
    })

    test('can update a Song', async () => {
        // TODO - test updating a musician
        const nSong = await Song.create({title: 'Survivor', year: 2018, length: 3})
        const updatedSong = await nSong.update(
            {
                title: 'Lost Soul Survivor'
            }
        )
        expect(updatedSong.title).toBe('Lost Soul Survivor');
    })

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        const dBand = await Band.create({name: 'Aerosmith', genre: 'Rock'})
        const noBand = await dBand.destroy()
        expect(noBand).toBe(dBand);
    })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        const dMusician = await Musician.create({name: 'Yo-Yo Ma', instrument: 'Chello'})
        const noMusician = await dMusician.destroy()
        expect(noMusician).toBe(dMusician);
    })

    test('can delete a Song', async () => {
        // TODO - test deleting a musician
        const dSong = await Song.create({title: 'Put it on me', year: 2022, length: 2})
        const noSong = await dSong.destroy()
        expect(noSong).toBe(dSong);
    })
})