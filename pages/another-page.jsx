import React, {useState, useEffect} from 'react'
import { Typography, Button, Container, Stack, Box} from "@mui/material"
import Header from "../components/Header"
import DogList from '../components/DogList';
import axios from "axios";


//In order to test this component with storybook I will need to set up msw first.
const AnotherPage = ({avatar}) => {
  const [showText, setShowText] = useState(false)
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
    
  const handleClick = () => {
    setShowText(!showText)
  }

  console.log("dog avatar", dogAvatar)

  return (
    <>
      <Header/>
      <Container maxWidth="sm" sx={{marginTop: "2.5rem"}}>
        <Typography id="title-page" variant="h2" gutterBottom sx={{ marginBottom: "30px" }}>
          The Amazing Calculator followers!
        </Typography>
        <Stack direction="row" spacing={8}>
        {/* <DogList dogAvatar={dogAvatar}/> */}
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

export async function getStaticProps() {

 //   const getDogAvatarRes = () =>{ 
 //     const response = {
 //       avatar: null,
 //     }
 //    axios
 //    .get(`https://dog.ceo/api/breeds/image/random/4`)
 //    .then((res) => {
 //      setDogAvatar(res.data.message);
 //     })
 //   .catch((err) => {
 //     setDogAvatar(err.response.data.message);
 // })};

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
 