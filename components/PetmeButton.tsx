import React, {useState} from 'react'
import {Button, Typography} from "@mui/material"



interface Label {
  /**
   * Button's name
   */
   label: string,
   primary?: true,
   variant?: string
   color?: string, 
   size?: string,
}

const label: Label= {
  label: "Pet me!",
  
}

function PetmeButton ({label}: Label ) {
    const [showText, setShowText] = useState(false)
    
    const handleClick = () => {
        setShowText(!showText)
    }
  return (
    <>
     <Button onClick={handleClick} variant="contained" type="submit" id="click-me" sx={{ marginBottom: "30px" }}>
      {label}
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

PetmeButton.defaultProps = label 







export {PetmeButton, DisplayText} 
