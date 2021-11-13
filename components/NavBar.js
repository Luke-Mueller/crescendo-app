import { useRouter } from "next/router";
import { Container, IconButton, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function Navbar() {
  const router = useRouter();

  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      maxWidth="lg"
      component="header"
    >
      {router.pathname !== "/" && (
        <IconButton
          color="secondary"
          aria-label="back button"
          onClick={() => router.back()}
        >
          <KeyboardBackspaceIcon />
          <Typography variant="button">Back</Typography>
        </IconButton>
      )}
    </Container>
  );
}
