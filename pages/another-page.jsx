 import React, {useState} from 'react'
 import { Typography, Button} from "@mui/material"
 
 const AnotherPage = () => {
  const [showText, setShowText] = useState(false)
  const handleClick = () => {
    setShowText(!showText)
  }
   return (
     <div>
        <Typography id="title-page" variant="h2" gutterBottom sx={{ marginBottom: "30px" }}>
          Another Page!
        </Typography>
        <Button onClick={handleClick} variant="contained" type="submit" id="click-me" sx={{ marginBottom: "30px" }}>
          Click me!
        </Button>
        {showText ? <DisplayText/> : null}
     </div>
   )
 }

 const DisplayText = () => {
  return (

  <Typography id="show-results" variant="h2" gutterBottom sx={{ marginBottom: "30px" }}>
    Hello There
  </Typography>

 )}
 
 export default AnotherPage
 