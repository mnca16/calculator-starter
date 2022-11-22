function verifyInputField(first: number | any, second: number | string) {
  // if (typeof first !== "number" || typeof second !== "number") {
  //   throw new Error("Enter only numbers")
  // } else if (first === "" || second === "") {
  //   throw new Error("Monst enter a number")
  // }

  if (typeof first !== "number" || typeof second !== "number") {
    throw new Error("Enter only numbers")
  // }  else if (first === "") {
  //     throw new Error("Monst enter a number")
  }
}

export const add = (first: number | any, second: number | any): number => {
    verifyInputField(first, second)
    return first + second
}

export const subtract = (first: number | any, second: number | any): number => {
  verifyInputField(first, second)
  return first - second
}

export const multiply = (first: number | any, second: number | any): number => {
  verifyInputField(first, second)
  return first * second
}

export const divide = (first: number | any, second: number | any): number => {
  verifyInputField(first, second)
  if (second === 0) {
    throw new Error("Can't divide by zero")
  }
  return first / second
}
