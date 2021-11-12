import { useContext } from "react";
import { Container, IconButton, Switch } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "@mui/material/styles";

import ColorModeContext from "../context/colorMode";

export default function Footer() {
  const { palette } = useTheme();
  const colorMode = useContext(ColorModeContext);
  const toggleMode = (mode) => {
    if (mode !== palette.mode) colorMode.toggleColorMode();
  };
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
      maxWidth="lg"
      component="footer"
    >
      <IconButton
        aria-label="light mode"
        onClick={toggleMode.bind(null, "light")}
      >
        <LightModeIcon color="secondary" />
      </IconButton>
      <Switch
        onChange={colorMode.toggleColorMode}
        checked={palette.mode === "dark" ? true : false}
        color="secondary"
      />
      <IconButton
        aria-label="dark mode"
        onClick={toggleMode.bind(null, "dark")}
      >
        <DarkModeIcon color="secondary" />
      </IconButton>
    </Container>
  );
}
