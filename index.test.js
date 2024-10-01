const capitalize = require('./capitalize.js');
const reverseString = require('./reverseString.js');
const calculator = require('./calculator.js');
const caesarCipher = require('./caesarCipher.js');
const analyzeArray = require('./analyzeArray.js');

describe("capitalize", () => {
    test('[hello] should result in "Hello"', () => {
        expect(capitalize("hello")).toBe("Hello")
    })
})

describe("reverseString", () => {
    test('[hello] should result in "olleh"', () => {
        expect(reverseString("hello")).toBe("olleh")
    })
})

describe("calculator", () => {
    test('[5,5] should result in "10"', () => {
        expect(calculator.add(5,5)).toBe(10)
    })

    test('[5,5] should result in "0"', () => {
        expect(calculator.subtract(5,5)).toBe(0)
    })

    test('[5,5] should result in "25"', () => {
        expect(calculator.multiply(5,5)).toBe(25)
    })

    test('[5,5] should result in "1"', () => {
        expect(calculator.divide(5,5)).toBe(1)
    })
})

describe("analyzeArray", () => {
    test('analyzeArrayTest', () => {
        expect(analyzeArray([1,8,3,4,2,6])).toEqual({
            min: 1,
            max: 8,
            length: 6,
            average: 4
        })
    })
})

describe("caesarCipher", () => {
    test('caesarCipherABCTest', () => {
        expect(caesarCipher("xyz", 3)).toBe('abc')
    })
})

describe("caesarCipher", () => {
    test('caesarCipherHeLLoTest', () => {
        expect(caesarCipher("HeLLo", 3)).toBe('KhOOr')
    })
})

describe("caesarCipher", () => {
    test('caesarCipherTest', () => {
        expect(caesarCipher('Hello, World!', 3)).toStrictEqual('Khoor, Zruog!')
    })
})