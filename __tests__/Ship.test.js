/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');

describe('Ship', () => {
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    })

    it('has a starting port', () => {
        const ship = new Ship('Dover');

        expect(ship.startingPort).toBe('Dover');
    })


    it('can set sail from a port', () => {
        const ship = new Ship('Dover');

        ship.setSail();

        expect(ship.startingPort).toBeFalsy();
    })

});
