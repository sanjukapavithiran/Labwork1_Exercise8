const dicegenerator = require('./index.js');

describe('dicegenerator function', () => {
    test('returns a number between 1 and the number of sides', () => {
        const numSides = 6; // Assuming a standard 6-sided dice
        const result = dicegenerator(numSides);
        expect(result).toBeGreaterThanOrEqual(1);
        expect(result).toBeLessThanOrEqual(numSides);
    });

    test('returns an integer value', () => {
        const numSides = 10;
        const result = dicegenerator(numSides);
        expect(Number.isInteger(result)).toBe(true);
    });
});