/* globals describe it expect */
const Port = require('../src/Port.js');
const Ship = require('../src/Ship.js');
const Itinerary = require('../src/Itinerary.js');

describe('Port', () => {
        let dover;
        let calais;
        let titanic;
        let queenMary;
        let itinerary;

    beforeEach(() => {
        dover = new Port('Dover');
        calais = new Port('Calais');
        itinerary = new Itinerary([dover, calais]);
        titanic = new Ship(itinerary);
        queenMary = new Ship(itinerary);
    })

    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    })

    it('has a name', () => {
        expect(dover.name).toEqual('Dover');
    })

    it('can add a ship', () => {
        dover.addShip(titanic);
        expect(dover.ships).toContain(titanic);
    })

    it('can remove a ship', () => {
        calais.addShip(titanic);
        calais.addShip(queenMary);
        calais.removeShip(queenMary);

        expect(calais.ships).toEqual([titanic]);
    })

    })
