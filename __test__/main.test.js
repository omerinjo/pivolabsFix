const { protect } = require('../contollers/users');
//const sum = require('./serveri');


test('endpoint', () => {
    expect(protect()).toBe(3)
});