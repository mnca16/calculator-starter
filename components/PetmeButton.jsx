import React, {useState} from 'react'
import {Button, Typography} from "@mui/material"
import  PropTypes  from 'prop-types'


function PetmeButton({label}) {
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


PetmeButton.propTypes = {
  /**
   * Button's name
   */
  label: PropTypes.string.isRequired
};

PetmeButton.defaultProps = {
  label: "Pet me!"
};



export {PetmeButton, DisplayText} 
