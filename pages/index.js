import Link from "next/link"
import { Typography, Container, Stack, Button } from "@mui/material"
import Calculator from "../components/calculator"

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Stack>
        <Typography variant="h2" gutterBottom sx={{ marginBottom: "30px" }}>
          The Amazing Calculator
        </Typography>
        <Button variant="contained" type="button" sx={{ marginBottom: "30px" }}>
          <Link href="/another-page">PAGE</Link>
        </Button>
        <Calculator />
      </Stack>
    </Container>
  )
}
