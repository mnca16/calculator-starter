import React, {useState, useEffect} from 'react'
import { Typography, Button, Container, Stack, Box} from "@mui/material"
import Header from "../components/Header"
import DogList from '../components/DogList';
import axios from "axios";

const AnotherPage = () => {
  const [showText, setShowText] = useState(false)
  const [dogAvatar, setDogAvatar] = useState([]);
  
  const fetchDogAvatar = () => {
    axios
      .get(`https://dog.ceo/api/breeds/image/random/4`)
      .then((res) => {
        setDogAvatar(res.data.message);
      })
      .catch((err) => {
        setDogAvatar(err.response.data.message);
      });
  };
  
  useEffect(() => {
    fetchDogAvatar();
  }, [])
  

  const handleClick = () => {
    setShowText(!showText)
  }

  return (
    <>
      <Header/>
      <Container maxWidth="sm">
        <Typography id="title-page" variant="h2" gutterBottom sx={{ marginBottom: "30px" }}>
          Calculator followers!
        </Typography>
        <Stack direction="row" spacing={8}>
        <DogList dogAvatar={dogAvatar}/>
        <Box>
        <Button onClick={handleClick} variant="contained" type="submit" id="click-me" sx={{ marginBottom: "30px" }}>
          Pet me!
        </Button>
        {showText ? <DisplayText/> : null}
        </Box>
        </Stack>
    </Container>
   </>
)}

const DisplayText = () => {
  return (
    <>
      <Typography data-testid="text-id" id="show-results" variant="h5" gutterBottom sx={{ marginBottom: "30px" }}>
       Woof Woof!
      </Typography>
    </>
)}
 
export default AnotherPage
 