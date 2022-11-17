import Link from "next/link"
import { Typography, Container, Stack, Box } from "@mui/material"
import Calculator from "../components/Calculator"
import Header from "../components/Header"

export default function Home() {
  return (
    <div>
      <Header />
      <Container
        sx={{ border: "2px solid white ", marginTop: "5rem" }}
        maxWidth="sm"
      >
        <Stack>
          <Box sx={{ padding: "2rem" }}>
            <Typography
              variant="h2"
              data-testid="header-text"
              gutterBottom
              sx={{ marginBottom: "30px" }}
            >
              The Amazing Calculator
            </Typography>
            <Calculator />
          </Box>
        </Stack>
      </Container>
    </div>
  )
}
