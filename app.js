// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// // Exporta la función para usarla en otros archivos 
// // (similar a la palabra clave "export" cuando se usa webpack)
// // module.exports = { sum };

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// // Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    // Retornamos el valor en dólares
    return valueInDollar;
}
console.log(fromEuroToDollar(3.5));

// // Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js

// CALCULO DEL DOLLAR CONTRA EL YEN ///
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a dólares
    let valueInYen = (valueInDollar/oneEuroIs["USD"]) * oneEuroIs["JPY"];
    // ESTE CALCULO DE LA REGLA DE 3 TAMBIEN ES VALIDO ///
    //     let valueInYen = (valueInDollar*oneEuroIs["JPY"]) / oneEuroIs["USD"];

    // Retornamos el valor en yenes
    return valueInYen;
    
}
console.log(fromDollarToYen(1));

// ESTE CALCULO TAMBIEN ES VALIDO para los 3///
// const fromDollarToYen = function(valueInDollar) {
//     // Convertimos el valor a dólares
//     let valueInYen = (valueInDollar*oneEuroIs["JPY"]) / oneEuroIs["USD"];
//     // Retornamos el valor en dólares
//     return valueInYen;
    
// 
// console.log(fromDollarToYen(1));

// CALCULO DEL YEN CONTRA EL POUND ///
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a dólares
    let valueInPound = (valueInYen/oneEuroIs["JPY"]) * oneEuroIs["GBP"];
    // Retornamos el valor en pounds
    return valueInPound;
}
console.log(fromYenToPound(150));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }