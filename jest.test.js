const sum = require("./sum")
const data = require('./object')
const list = require("./array")
const divide = require("./divide")

const truthA = 0
const truthB = null
const truthC = "teste"

// Matchers
test('add 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
})

test("Object Assignment", () => {
    data['two'] = 3;
    expect(data).toEqual({ 'one': 1, 'two': 3 })
})

// test('is Not Zero', () => {
//     expect(sum(2, -2)).not.toBe(0)
// })
test('is Not Zero', () => {
    expect(sum(2, 2)).not.toBe(0)
})

// thruthiNess
test("false", () => {
    expect(truthA).not.toBeNull()
    expect(truthA).toBeDefined();
    expect(truthA).not.toBeUndefined();
    expect(truthA).not.toBeTruthy();
    expect(truthA).toBeFalsy();
});
test("null", () => {
    expect(truthB).toBeNull();
    expect(truthB).toBeDefined();
    expect(truthB).not.toBeUndefined();
    expect(truthB).not.toBeTruthy();
    expect(truthB).toBeFalsy();

});

console.log(truthC)

test("defined", () => {
    expect(truthC).not.toBeNull();
    expect(truthC).toBeDefined();
    expect(truthC).not.toBeUndefined();
    expect(truthC).toBeTruthy();
    expect(truthC).not.toBeFalsy();

});


// Numbers
test("one plus five", () => {
    let value = sum(1, 5)
    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(4.5)
    expect(value).toBeLessThan(7)
    expect(value).toBeLessThanOrEqual(6.5)

    expect(value).toBe(6);
    expect(value).toEqual(6);
})

test("floating numbers", () => {
    let value = sum(1.0, 5.4)
    expect(value).toBeCloseTo(6.4)
})

// STRINGs
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});

// array

test('the shopping list has milk on it', () => {
    expect(list).toContain('milk');
    expect(new Set(list)).toContain('milk');
});

// Exceptions 
test("Divisão por zero", () => {
    expect(divide(10, 0)).toThrow();
    console.log(divide(10, 0))
});