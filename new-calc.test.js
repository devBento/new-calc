const calc = require('./new-calc');

test('Soma 1 e 2 espera 3', () => {
    expect(calc.soma(1,2)).toBe(3);
});


// A1.1

test('Soma 10 e 10 espera 20', () => {
    expect(calc.soma(10,10)).toBe(20);
});

test('Soma -10 e -10 espera -20', () => {
    expect(calc.soma(-10,-10)).toBe(-20);
});

test('Soma 5 e 0 espera 5', () => {
    expect(calc.soma(5,0)).toBe(5);
});

test('Soma 10 e x espera y',() => {
    const x = 10;
    const y = 10 + x;
    expect(calc.soma(10,x)).toBe(y);
});


// A1.2

test('Sub 10 e 5 espera 5', () => {
    expect(calc.sub(10,5)).toBe(5);
});

test('Sub -10 e -10 espera 0', () => {
    expect(calc.sub(-10,-10)).toBe(0);
});

test('Sub 10 e -5 espera 15', () => {
    expect(calc.sub(10,-5)).toBe(15);
});

test('Sub 10 e 0 espera 10', () => {
    expect(calc.sub(10,0)).toBe(10);
});


// A1.3

test('Mult 5 e 5 espera 25', () => {
    expect(calc.mult(5,5)).toBe(25);
});

test('Mult -5 e -5 espera 25', () => {
    expect(calc.mult(-5,-5)).toBe(25);
});

test('Mult 5 e -5 espera -25', () => {
    expect(calc.mult(5,-5)).toBe(-25);
});

test('Mult 5 e 0 espera 0', () => {
    expect(calc.mult(5,0)).toBe(0);
});


// A2.1

test('Div 10 e 2 espera 5', () => {
    expect(calc.div(10,2)).toBe(5);
});

test('Div -10 e -5 espera 2', () => {
    expect(calc.div(-10,-5)).toBe(2);
});

test('Div 10 e -2 espera -5', () => {
    expect(calc.div(10,-2)).toBe(-5);
});

//test('Div 10 e 0 espera undefined', () => {
//    expect(calc.div(10,0)).toBe('undefined');
//});