// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(amount) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = amount * oneEuroIs["USD"] ;
    // return the dollar value
    return valueInDollar;
};
const fromDollarToYen = function(amount) {
    // Convert the given valueInEuro to dollars
    let valueInYen = amount / oneEuroIs["USD"] * oneEuroIs["JPY"] ;
    // return the dollar value
    return valueInYen;
};
const fromYenToPound = function(amount) {
    // Convert the given valueInEuro to dollars
    let valueInPound = amount / oneEuroIs["JPY"] * oneEuroIs["GBP"] ;
    // return the dollar value
    return valueInPound;
};
// const fromDollarToYen = funtion()
module.exports={fromEuroToDollar, fromDollarToYen, fromYenToPound}