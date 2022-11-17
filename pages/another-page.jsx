import React, {useState, useEffect} from 'react'
import { Typography, Button, Container, Stack, Box} from "@mui/material"
import Header from "../components/Header"
import DogList from '../components/DogList'
import {PetmeButton} from "../components/PetmeButton"
import axios from "axios";


//In order to test this component with storybook I will need to set up msw first.
const AnotherPage = ({avatar}) => {
  const [dogAvatar, setDogAvatar] = useState(avatar);

//     const getDogAvatarRes = () =>{ 
//     //  const response = {
//     //    avatar: null,
//     //  }
//     axios
//     .get(`https://dog.ceo/api/breeds/image/random/4`)
//     .then((res) => {
//       setDogAvatar(res.data.message);
//      })
//    .catch((err) => {
//      setDogAvatar(err.response.data.message);
//  })};

//  useEffect(() => {
//   getDogAvatarRes()
//  }, [])
    
  console.log("dog avatar", dogAvatar)

  return (
    <>
      <Header/>
      <Container maxWidth="sm" sx={{marginTop: "2.5rem"}}>
        <Typography id="title-page" variant="h2" gutterBottom sx={{ marginBottom: "30px" }}>
          The Amazing Calculator followers!
        </Typography>
        <Stack direction="row" spacing={8}>
        <DogList dogAvatar={dogAvatar}/>
        <Box>
         <PetmeButton/>
        </Box>
        </Stack>
    </Container>
   </>
)}


export async function getStaticProps() {

  const res = axios.get(`https://dog.ceo/api/breeds/image/random/4`)
  const avatar = await res.then((res) => res.data.message)
  console.log("statticprops", avatar)

  
  return {
    props: {
      avatar,
    },
  }
}

 
export default AnotherPage
 