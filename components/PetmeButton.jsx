import React, {useState} from 'react'
import {Button, Typography} from "@mui/material"


function PetmeButton() {
    const [showText, setShowText] = useState(false)
    
    const handleClick = () => {
        setShowText(!showText)
    }
  return (
    <>
     <Button onClick={handleClick} variant="variant" type="submit" id="click-me" sx={{ marginBottom: "30px" }}>
      Pet me!
     </Button>
      {showText ? <DisplayText/> : null}
    </>
  )
}
 

const DisplayText = () => {
    return (
      <>
        <Typography data-testid="text-id" id="show-results" variant="h5" gutterBottom sx={{ marginBottom: "30px" }}>
         Woof Woof!
        </Typography>
      </>
)}






export default PetmeButton
