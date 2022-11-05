import { add, subtract, multiply, divide } from "../../../utils/calculate"

export default function handler(req, res) {
  try {
    if (req.method !== "GET") {
      throw new Error(
        `Unsupported method ${req.method}. Only GET method is supported`
      )
    }

    const params = extractParams(req.query.params)
    console.log("params", params)
    console.log("req.query.params", req.query.params)
    let result
    switch (params.operation) {
      case "add":
        result = add(params.first, params.second)
        break
      case "subtract":
        result = subtract(params.first, params.second)
        break
      case "multiply":
        result = multiply(params.first, params.second)
        break
      case "divide":
        result = divide(params.first, params.second)
        break
      default:
        throw new Error(`Unsupported operation ${params.operation}`)
    }
    res.status(200).json({ result })
  } catch (e) {
    console.log("Got error")
    res.status(500).json({ message: e.message })
  }
}

function extractParams(queryParams) {
  console.log("query para from api function", queryParams)
  if (queryParams.length !== 3) {
    throw new Error(
      `Query params should have 3 items. Received ${queryParams.length}: ${queryParams}`
    )
    //Should we test if the params are stings? since we're already testing that with the functions?
    //Note: When the user enters a string the api returns status and NaN as response.
    //String error handler
  }
  try {
    const params = {
      operation: queryParams[0],
      // first: parseInt(queryParams[1]),
      // second: parseInt(queryParams[2]),
      first: parseFloat(queryParams[1]),
      second: parseFloat(queryParams[2]),
    }
    return params
  } catch (e) {
    console.log("e -> error", e)
    throw new Error(`Failed to process query params. Received: ${queryParams}`)
  }
}
