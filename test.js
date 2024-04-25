const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function(){
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

test("One dollar should be 146.35 yen", function(){
    const yen = fromDollarToYen(3.5);
    const expected = 3.5 * 1 / 1.07 * 156.5;
    expect(yen).toBeCloseTo(expected, 2);
});

test("One yen should be 0.00557 pounds", function(){
    const pounds = fromYenToPound(3.5);
    const expected = 3.5 * 0.00557;
    expect(pounds).toBeCloseTo(expected, 4);
});