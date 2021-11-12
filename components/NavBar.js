import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { Container, IconButton, TextField, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import InputAdornment from "./inputAdornment";
import constants from "../constants/ui";

export default function Navbar() {
  const [error, setError] = useState(constants.initialErrorObj);
  const router = useRouter();
  const inputRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();
    const userInput = inputRef.current.value.trim();
    if (!userInput) {
      setError({ hasError: true, message: constants.defaultErrorMessage });
      return;
    }
		console.log("userinput: ", userInput)
    inputRef.current.value = null;
  }

  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
				minHeight: '70px'
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

      {router.pathname === "/" && (
        <TextField
          color="secondary"
          onChange={() => setError({ hasError: false, message: " " })}
          error={error.hasError}
          helperText={error.message}
          InputProps={{
            endAdornment: <InputAdornment submitHandler={submitHandler} />,
          }}
          inputRef={inputRef}
          label="Search recipes"
          sx={{
            width: constants.inputWidth,
            minWidth: constants.inputMinWidth,
            marginLeft: "auto",
          }}
          variant="standard"
        />
      )}
    </Container>
  );
}
