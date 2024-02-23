// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One Dollar should be 146.26168224299064 yens", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yen = fromDollarToYen(1);

    // // Si 1 Dollar son  dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    // const expected = 1 * 1.07;

    // Hago mi comparación (la prueba)
    expect(yen).toBe(146.26168224299064); // 1 dollar son 146.261682505 yenes, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One yen should be 0.0055591054313099035 Pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pounds = fromYenToPound(150);

    // // Si 1 yen son 0.0055591054313099035 pounds, entonces 150 YENES debe ser (150 * 0.8338658146964857)
    // const expected = 1 * 1.07;

    // Hago mi comparación (la prueba)
    expect(pounds).toBe(0.8338658146964857); // 1 yen son 0.8338658146964857 pounds, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})