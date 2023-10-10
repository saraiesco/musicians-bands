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
        const band = await Band.create({
            name: "Foo Fighters",
            genre: "Rock",
        })
        expect(band.name).toBe('Foo Fighters');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const musician = await Musician.create({
            name: "Beethovan",
            instrument: "Piano"
        })
        expect(musician.instrument).toBe('Piano');
    })

    test('can create a Song', async () => {
        // TODO - test creating a song
        const song = await Song.create({
            title: "26",
            year: 2018,
            length: 4
        })
        expect(song.title).toBe("26");
    })

    test('can update a Band', async () => {
        // TODO - test updating a band
        const band1 = await Band.create({
            name: "Vampire Weekend",
            genre: "Indie",
        })
        await band1.update({genre: "Indie-rock"})
        expect(band1.genre).toBe('Indie-rock');
    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        const musician1 = await Musician.create({
            name: "Lindsey Sterling",
            instrument: "Violin"
        })
        await musician1.update({name: "Kevin Sylvester"})
        expect(musician1.name).toBe('Kevin Sylvester');
    })

    test('can update a Song', async () => {
        // TODO - test updating a song
        const song1 = await Song.create({
            title: "Spice Girl",
            year: 2018,
            length: 4
        })
        await song1.update({title: "HeebieJeebies"})
        expect(song1.title).toBe('HeebieJeebies');
    })

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        const bandDESTROY = await Band.create({
            name: "Panic! at the Disco",
            genre: "Rock",
        })
        const bandUrOkay = await Band.create({
            name: "Daft Punk",
            genre: "Electronic",
        })
        const toExterminate = await Band.findByPk(1)
        toExterminate.destroy();
        expect(toExterminate.id).toBe(1);
    })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        const musicianSave = await Musician.create({
            name: "Lisa Simpson",
            instrument: "Saxophone"
        })
        const musicianDelete = await Musician.create({
            name: "Sarai Escobar",
            instrument: "Saxophone"
        })
        const deleted = await Musician.findByPk(2)
        deleted.destroy();
        expect(deleted.id).toBe(2);
    })

    test('can delete a Song', async () => {
        // TODO - test deleting a song
        const songDestroy = await Song.create({
            title: "Thriller",
            year: 1982,
            length: 6
        })
        const songKeep = await Song.create({
            title: "Superstition",
            year: 1972,
            length: 3
        })
        const goodbye = await Song.findByPk(1)
        goodbye.destroy();
        expect(goodbye.id).toBe(1);
    })
})