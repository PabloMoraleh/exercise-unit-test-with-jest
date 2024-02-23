// Import the function sum from the app.js file
const { fromEuroToDollar } = require('./app.js');

// // Start your first test
// test('10', () => {
//     // Inside the test we call our sum function with 2 numbers
//     let total = 10.7;

//     // We expect the sum of those 2 numbers to be 23
//     expect(total).toBe(10.7);
// });
test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});

test("One dollar should be 146.26168224299065 yens", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');
    expect(fromDollarToYen(10)).toBe(1462.6168224299065);
});

test("One Yen should be 0.0055591054313099035 GBP", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');
    expect(fromYenToPound(1)).toBe(0.0055591054313099035);
});
