import { add, subtract, multiply, divide } from "../utils/calculate"

describe("Calculator add test", () => { 
  test("adds two number and return", () => {
    expect(add(1, 2)).toBe(3)
  })
  //test can be also it
  test("add two floats numbers", () => {
    expect(add(0.5, 0.5)).toBe(1)
  })

  test("adds one number one float", () => {
    expect(add(1, 0.5)).toBe(1.5)
  })
})

describe("Calcuator subtract test", () => {
  test("subtracts two number and return", () => {
    expect(subtract(3, 2)).toBe(1)
  })

  test("Suntracts two floats numbers", () => {
    expect(subtract(1.5, 0.5)).toBe(1)
  })

  test("Subtracts one number one float", () => {
    expect(subtract(1, 0.5)).toBe(0.5)
  })

  test("Subtracts greater second and return negative number", () => {
    expect(subtract(1, 5)).toBe(-4)
  })

  test("Subtracts with negative number first", () => {
    expect(subtract(-1, 5)).toBe(-6)
  })
})

describe("Calcuator multiply test", () => {
  test("multiply two numbers and return the result", () => {
    expect(multiply(3, 2)).toBe(6)
  })

  test("multiply a number and 0 and return 0", () => {
    expect(multiply(3, 0)).toBe(0)
  })

  test("multiply two negative numbers and return a positive number", () => {
    expect(multiply(-3, -3)).toBe(9)
  })

  test("multiply negative number and a positive number and return a negative number", () => {
    expect(multiply(-3, 6)).toBe(-18)
  })

  test("multiply two float numbers", () => {
    expect(multiply(3.5, 3.5)).toBe(12.25)
  })
})

describe("Calcuator subtract test", () => {
  test("divide two number and return the division", () => {
    expect(divide(8, 2)).toBe(4)
  })

  test("divide two floats", () => {
    expect(divide(5.3, 2.5)).toBe(2.12)
  })

  test("divide a negative number and a integer", () => {
    expect(divide(5, -2)).toBe(-2.5)
  })

  test("divides by zero and returns an error", () => {
    expect(() => {
      divide(5, 0)
    }).toThrow("Can't divide by zero")
  })
})
