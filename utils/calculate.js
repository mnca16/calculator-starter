export const add = (first, second) => {
  console.log("first", typeof first)
  if (typeof first !== "number" || typeof second !== "number") {
    throw new Error("Enter only numbers")
  } else if (first === "" || second === "") {
    throw new Error("Monst enter a number")
  }
  return first + second
}

export const subtract = (first, second) => {
  if (typeof first !== "number" || typeof second !== "number") {
    throw new Error("Enter only numbers")
  } else if (first === "" || second === "") {
    throw new Error("Monst enter a number")
  }
  return first - second
}

export const multiply = (first, second) => {
  // if (typeof first !== "number" || typeof second !== "number") {
  //   throw new Error("Enter only numbers")
  // } else if (first === "" || second === "") {
  //   throw new Error("Monst enter a number")
  // }
  // return first * second
  if (first === null || first === "" || second === null || second === "") {
    throw new Error("Must provide a number")
  }
  if (!isNaN(first) && !isNaN(second)) {
    return Number(first) * Number(second)
  }
  throw new Error("Must be a number")
}

export const divide = (first, second) => {
  if (typeof first !== "number" || typeof second !== "number") {
    throw new Error("Enter only numbers")
  } else if (first === "" || second === "") {
    throw new Error("Monst enter a number")
  } else if (second === 0) {
    throw new Error("Can't divide by zero")
  }
  return first / second
}
