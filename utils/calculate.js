function verifyInputField(first, second) {
  if (typeof first !== "number" || typeof second !== "number") {
    throw new Error("Enter only numbers")
  } else if (first === "" || second === "") {
    throw new Error("Monst enter a number")
  }
}

export const add = (first, second) => {
  verifyInputField(first, second)
  return first + second
}

export const subtract = (first, second) => {
  verifyInputField(first, second)
  return first - second
}

export const multiply = (first, second) => {
  //Fixes the api test error
  if (first === null || first === "" || second === null || second === "") {
    throw new Error("Must provide a number")
  }
  if (!isNaN(first) && !isNaN(second)) {
    return Number(first) * Number(second)
  }
  throw new Error("Must be a number")
}

export const divide = (first, second) => {
  verifyInputField(first, second)
  if (second === 0) {
    throw new Error("Can't divide by zero")
  }
  return first / second
}
