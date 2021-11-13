import { useRouter } from "next/router";
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import dateFormat from "dateformat";

function GridItem({ recipe }) {
  const router = useRouter();
  const { palette } = useTheme();

  const fullDate = dateFormat(new Date(recipe.postDate), "mmmm dS, yyyy");

  function clickHandler (event) {
    event.preventDefault();
    router.push({
      pathname: "/recipe/[id]",
      query: { id: recipe.uuid },
    })
  }
  return (
    <Grid item xs={1} sx={{ minWidth: "18rem", marginBottom: 2 }}>
      <Card sx={{ height: '100%' }}>
        <CardActionArea onClick={clickHandler}>
          <CardHeader
            avatar={
              <Avatar
                sx={{ bgcolor: palette.secondary.main }}
                aria-label="recipe"
              >
                {recipe.title[0]}
              </Avatar>
            }
            title={recipe.title}
            subheader={fullDate}
          />
          <CardMedia
            component="img"
            height="194"
            src={`${recipe.images.medium}`}
            alt="image of food"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {recipe.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default GridItem;
