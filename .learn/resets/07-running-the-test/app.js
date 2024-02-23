// // One euro is:
// let oneEuroIs = {
//     "JPY": 156.5, // japan yen
//     "USD": 1.07, // us dollar
//     "GBP": 0.87, // british pound
// }
// // We declare the function with the exact name "fromEuroToDollar"
// const fromEuroToDollar = function(oneEuroIs) {
//     // Convert the given valueInEuro to dollars
//     let valueInDollar = oneEuroIs * "USD";
//     // return the dollar value
//     return valueInDollar;
// };
// const fromEuroToYen = function(oneEuroIs) {
//     // Convert the given valueInEuro to yen
//     let valueInYen = oneEuroIs * "JPY";
//     // return the yen value
//     return valueInYen;
// };
// const fromEuroToGBP = function(oneEuroIs) {
//     // Convert the given valueInEuro to GBP
//     let valueInGBP = oneEuroIs * "GBP";
//     // return the GBP value
//     return valueInGBP;
// };

// // Export the function to be used on other files
// // We include fromEuroToDollar here as well because it needs to be exported
// module.exports = { fromEuroToDollar }
// // Just a console log for ourselves
// console.log(fromEuroToDollar(10))

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / 1.07;
    let valueInYen = valueInEuro * 156.5;
    valueInYen = Number(valueInYen.toFixed(2))
    return valueInYen ;
}
const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / 156.5;
    let valueInPound = valueInEuro * 0.87;
    valueInPound = Number(valueInPound.toFixed(2))
    return valueInPound; 
}
console.log(fromYenToPound(1000))

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };