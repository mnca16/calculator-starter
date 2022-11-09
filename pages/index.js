import Link from "next/link"
import { Typography, Container, Stack, Button } from "@mui/material"
import Calculator from "../components/calculator"

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Stack>
        <Typography
          variant="h2"
          data-testid="header-text"
          gutterBottom
          sx={{ marginBottom: "30px" }}
        >
          The Amazing Calculator
        </Typography>
        <Button
          title="button"
          variant="contained"
          type="button"
          sx={{ marginBottom: "30px" }}
        >
          <Link href="/another-page">PAGE</Link>
        </Button>
        <Calculator />
      </Stack>
    </Container>
  )
}
