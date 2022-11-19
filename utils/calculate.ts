function verifyInputField(first: number, second: number) {
  // if (typeof first !== "number" || typeof second !== "number") {
  //   throw new Error("Enter only numbers")
  // } else if (first === "" || second === "") {
  //   throw new Error("Monst enter a number")
  // }
  // if (isNaN(first) || isNaN(second)) {
  //   throw new Error("Enter only numbers")
  // }

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
  //Fixes the api test error
  // if (first === null ) {
  //   throw new Error("Enter only numbers")
  // }
  // if (!isNaN(first) && !isNaN(second)) {
  //   return Number(first) * Number(second)
  // }
  // throw new Error("Must be a number")
  // return Number(first) * Number(second)
  return first * second
}

export const divide = (first: number, second: number): number => {
  verifyInputField(first, second)
  if (second === 0) {
    throw new Error("Can't divide by zero")
  }
  return first / second
}
