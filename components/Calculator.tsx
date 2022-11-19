import Grid2 from "@mui/material/Unstable_Grid2"
import {
  Box,
  Paper,
  TextField,
  MenuItem,
  FormControl,
  NativeSelect,
  Button,
  Divider,
  Typography,
} from "@mui/material"
import { OutlinedInput } from "@mui/material"
import axios from "axios"
//React warps this events with special types with its own objects 
import { useState, ChangeEvent, FormEvent, useRef } from "react"
//There is mouse event you can use for ts

const Calculator = () => {
  const [operation, setOperation] = useState("")
  const [result, setResult] = useState("")
  const first = useRef<HTMLInputElement>(null)
  const second = useRef<HTMLInputElement>(null)

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setOperation(e.target.value)
  }

  

  const handleCalculate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const query = {
      operation: operation,
      // first: e.target.first.value,
      // second: e.target.second.value,
      first: first.current?.value,
      second: second.current?.value,

    /*
    The question mark ? in typescript is used in two ways:
    To mention that a particular variable is optional.
    To pre-check if a member variable is present for an object.
    It prevents errors related to undefined or null in a program.
    */
    }

    axios
      .get(`/api/calculate/${query.operation}/${query.first}/${query.second}`)
      .then((res) => {
        setResult(res.data.result)
      })
      .catch((err) => {
        setResult(err.response.data.message)
      })
  }

  return (
    <form id="calculator-form" onSubmit={handleCalculate}>
      <Grid2 container spacing={1}>
        <Grid2 xs={5}>
          <FormControl fullWidth>
            <TextField
              id="first"
              label="First Number"
              variant="outlined"
              inputRef={first}
            />
          </FormControl>
        </Grid2>
        <Grid2 xs={2}>
          <FormControl fullWidth>
            <NativeSelect
              input={<OutlinedInput />}
              defaultValue={""}
              inputProps={{
                name: "operation",
                id: "operation",
              }}
              onChange={handleChange}
            >
              <option value="">Op</option>
              <option value={"add"}>+</option>
              <option value={"subtract"}>-</option>
              <option value={"multiply"}>*</option>
              <option value={"divide"}>/</option>
            </NativeSelect>
          </FormControl>
        </Grid2>
        <Grid2 xs={5}>
          <FormControl fullWidth>
            <TextField
              id="second"
              label="Second Number"
              variant="outlined"
              inputRef={second}
            />
          </FormControl>
        </Grid2>
        <Grid2 xs={12}>
          <FormControl fullWidth>
            <Button title="submit" variant="contained" type="submit">
              Calculate
            </Button>
          </FormControl>
        </Grid2>
        <Grid2 xs={12}>
          <Divider />
        </Grid2>
        <Grid2 xs={12}>
          <Box>
            <Paper>
              <Typography
                id="result"
                align="center"
                variant="h3"
                gutterBottom
                data-testid="result-id"
              >
                {result}
              </Typography>
            </Paper>
          </Box>
        </Grid2>
      </Grid2>
    </form>
  )
}
export default Calculator
