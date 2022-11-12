import React from 'react'
import Link from "next/link"
import { Container, Stack, IconButton, Box} from "@mui/material"
import RoofingIcon from '@mui/icons-material/Roofing';
import PetsIcon from '@mui/icons-material/Pets';

const iconStyle = { width: "4rem", height: "4rem"}


const Header = () => {
  return (
    <header style={{width: "100%", height: "100px", marginTop: "1.5rem" }}>
      <Container  maxWidth="sm">
           <Stack direction="row" spacing={44}>
           <IconButton  >
             <Link href="/">
                  <RoofingIcon sx={iconStyle}  color='primary'/>
             </Link>
          </IconButton>
          <IconButton>
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
