import Link from "next/link"
import { Typography, Container, Stack, Button } from "@mui/material"
import Calculator from "../components/calculator"
import Header from "../components/Header"

export default function Home() {
  return (
    <div>
      <Header />
      <Container
        sx={{ border: "2px solid white ", marginTop: "1rem" }}
        maxWidth="sm"
      >
        <Stack>
          <Typography
            variant="h2"
            data-testid="header-text"
            gutterBottom
            sx={{ marginBottom: "30px" }}
          >
            The Amazing Calculator
          </Typography>
          <Calculator />
        </Stack>
      </Container>
    </div>
  )
}
