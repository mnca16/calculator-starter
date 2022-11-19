import { add, subtract, multiply, divide } from "../../../utils/calculate"
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse): void{
  try {
    if (req.method !== "GET") {
      throw new Error(
        `Unsupported method ${req.method}. Only GET method is supported`
      )
    }
    
    /*
    TS ERROR when using req.query.params as paramenter on extractParams function:

    "Argument of type 'string | string[]' is not assignable to parameter of type 'string[]'.
    Type 'string' is not assignable to type 'string[]'.""

    NOTE: Next.js know that the req can be a string or a string array.

    ------------------//------------------------------------//-----------------------------
    
    Usefull link to understand this error:
    https://stackoverflow.com/questions/55946001/typescripts-type-string-string-is-not-assignable-to-type-string-what-is

    ----------------//-----------------------------------//------------------------------

    Omer's code: He added a conditional statement that throws an error if the query paramenters 
    aren't an array of strings. That is the code I will use.

    Note: I found this way around but I'll need to analize if is really working:
      I'm trying to use the inion type 
     -first: Declare a variable with sting[] | string type
      let parameters: string[] | string= req.query.params 
     -second: Modify extra params function to receive the same params 
      unction extractParams(queryParams: string[] | sting): CalculatorQueryParams{

    */

    const queryParamameters = req.query.params;
    //If is not an array
    if (!Array.isArray(queryParamameters)) {
      throw new Error(`Query params should have 3 items. Received ${queryParamameters}`)
    }

    const params = extractParams(queryParamameters)
    let result: number
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
    let msg = (e as Error).message;
    res.status(500).json({ message: msg })
  }
}

//This interface would work as the return object for extractParams function
interface CalculatorQueryParams  {
operation: string,
first: number,
second: number,
}

function extractParams(queryParams: string[]): CalculatorQueryParams{
  console.log("queryParams", queryParams) 
  //queryParams is an array with 3 string elements, that's why we
  //set the parameters type as an array of strings, we return the interface
  //with two types of numbers because on convert the strings to numbers
  //with the parseFloat method.
  if (queryParams.length !== 3) {
    throw new Error(
      `Query params should have 3 items. Received ${queryParams.length}: ${queryParams}`
    )
  }

  if (isNaN(Number(queryParams[1])) || isNaN(Number(queryParams[2]))) {
    throw new Error(`Failed to process query params. Received: ${queryParams}`);
  }
  const params: CalculatorQueryParams = {
        operation: queryParams[0],
        first: parseFloat(queryParams[1]),
        second: parseFloat(queryParams[2]),
      }


  return params
  // try {
  //   const params: CalculatorQueryParams = {
  //     operation: queryParams[0],
  //     first: parseFloat(queryParams[1]),
  //     second: parseFloat(queryParams[2]),
  //   }
  //   return params
  // } catch (e) {
  //   throw new Error(`Failed to process query params. Received: ${queryParams}`)
  // }

  

}
