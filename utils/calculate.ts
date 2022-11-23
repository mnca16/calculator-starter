function verifyInputField(first: number, second: number) {
  if (typeof first !== "number" || typeof second !== "number") {
    throw new Error("Enter only numbers")
  }
}

export const add = (first: number, second: number): number => {
    verifyInputField(first, second)
    return first + second
}

export const subtract = (first: number, second: number): number => {
  verifyInputField(first, second)
  return first - second
}

export const multiply = (first: number, second: number): number => {
  verifyInputField(first, second)
  return first * second
}

export const divide = (first: number, second: number): number => {
  verifyInputField(first, second)
  if (second === 0) {
    throw new Error("Can't divide by zero")
  }
  return first / second
}
