import React from 'react'
import Link from "next/link"
import { Container, Stack, IconButton, Box} from "@mui/material"
import RoofingIcon from '@mui/icons-material/Roofing';
import PetsIcon from '@mui/icons-material/Pets';

const iconStyle = { width: "4rem", height: "4rem"}


const Header = () => {
  return (
    <header style={{width: "100%", height: "100px", marginTop: "1.5rem", }}>
      <Container  maxWidth="sm" sx={{borderBottom: "1px solid white", paddingBottom: "1.5rem"}}>
           <Stack direction="row" spacing={44}>
           <IconButton data-testid="home-button" id="home-button">
             <Link href="/">
                  <RoofingIcon sx={iconStyle}  color='primary'/>
             </Link>
          </IconButton>
          <IconButton data-testid="followers-button" id="followers-button">
             <Link  href="/another-page">
                 <PetsIcon sx={{ width: "4rem", height: "4rem"}} color='primary'/>
             </Link>
           </IconButton>
           </Stack>
      </Container>
    </header>
  )
}

export default Header
