import { useRouter } from "next/router";
import {
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function CityListItem({ recipe }) {
    console.log(recipe)
  const router = useRouter();
  const { palette } = useTheme();

  function clickHandler(event) {
    event.preventDefault();
    router.push({
      pathname: "/recipe/[id]",
      query: { id: recipe.uuid },
    });
  }

  return (
    <ListItem onClick={clickHandler}>
      <ListItemButton sx={{ color: palette.secondary }}>
        <Typography sx={{ color: "secondary" }} variant="subtitle1">
          {recipe.title}
        </Typography>
      </ListItemButton>
    </ListItem>
  );
}