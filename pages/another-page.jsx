import React, {useState} from 'react'
import { Typography, Button, Container} from "@mui/material"
 
const AnotherPage = () => {
  const [showText, setShowText] = useState(false)
  const handleClick = () => {
    setShowText(!showText)
  }
   return (
    <Container maxWidth="sm">
        <Typography id="title-page" variant="h2" gutterBottom sx={{ marginBottom: "30px" }}>
          Another Page!
        </Typography>
        <Button onClick={handleClick} variant="contained" type="submit" id="click-me" sx={{ marginBottom: "30px" }}>
          Click me!
        </Button>
        {showText ? <DisplayText/> : null}
   </Container>
)}

const DisplayText = () => {
  return (
    <>
      <Typography data-testid="text-id" id="show-results" variant="h2" gutterBottom sx={{ marginBottom: "30px" }}>
       Hello There
      </Typography>
    </>
)}
 
export default AnotherPage
 