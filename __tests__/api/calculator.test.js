// In this test we'll see if we're getting the expected result or if we're getting an error

/*
We will be mocking the api request (req) and the api response (res) with two functions
that returns chained objects. This functions would be passed as a parameters in the 
dynamic handler api function which would imported from the api file 
*/

import handler from "../../pages/api/calculate/[...params]"

describe("Calculator API test", () => {
  test("api gets response status 200 and valid result", () => {
    const req = getRequestObject("GET", ["add", 2, 1])
    const res = getResponseObject()
    handler(req, res)
    expect(res._status).toBe(200)
    expect(res._json).toEqual({ result: 3 })
  })

  test("api gets response 500 and catch error message", () => {
    const req = getRequestObject("GET", ["invalidOperation", 1, 1])
    const res = getResponseObject()
    handler(req, res)
    expect(res._status).toBe(500)
    expect(res._json).toEqual({
      message: `Unsupported operation ${req.query.params[0]}`,
    })
  })

  test("api gets wrong method and error message", () => {
    const req = getRequestObject("POST", ["multiply", 5, 5])
    const res = getResponseObject()
    handler(req, res)
    expect(res._status).toBe(500)
    expect(res._json).toEqual({
      message: `Unsupported method ${req.method}. Only GET method is supported`,
    })
  })

  test("api gets not parameters and receives error message", () => {
    const req = getRequestObject("GET", [])
    const res = getResponseObject()
    handler(req, res)
    expect(res._status).toBe(500)
    expect(res._json).toEqual({
      message: `Query params should have 3 items. Received ${req.query.params.length}: ${req.query.params}`,
    })
  })

  test("api gets less than 3 query parameters and receives error message", () => {
    const req = getRequestObject("GET", ["multiply", 5])
    const res = getResponseObject()
    handler(req, res)
    expect(res._status).toBe(500)
    expect(res._json).toEqual({
      message: `Query params should have 3 items. Received ${req.query.params.length}: ${req.query.params}`,
    })
  })

  test("api gets more than 3 query parameters and receives error message", () => {
    const req = getRequestObject("GET", ["multiply", 5, 6, 7])
    const res = getResponseObject()
    handler(req, res)
    expect(res._status).toBe(500)
    expect(res._json).toEqual({
      message: `Query params should have 3 items. Received ${req.query.params.length}: ${req.query.params}`,
    })
  })

  test("api gets strings instead of numbers", () => {
    const req = getRequestObject("GET", ["multiply", "abc", "def"])
    const res = getResponseObject()
    handler(req, res)
    expect(res._status).toBe(500)
    expect(res._json).toEqual({
      //message: `Failed to process query params. Received: ${req.query.params}`,
      message: "Must be a number",
    })
  })
})

const getRequestObject = (method, params) => {
  const requestHelperObject = {
    method: method,
    query: { params },
  }
  return requestHelperObject
}

const getResponseObject = () => {
  const responseHelperObject = {
    _status: null,
    _json: null,
    status: function (a) {
      this._status = a
      return this
    },
    json: function (b) {
      this._json = b
      return this
    },
  }
  return responseHelperObject
}
