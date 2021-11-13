import {
  Card,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import HTTPConstants from "../../constants/http";

export default function addEditRecipes({ recipe }) {
  console.log(recipe);
  return (
    <Container maxWidth="sm">
      <Card sx={{ height: "100%", paddingTop: 5, paddingBottom: 5 }}>
        <form>
          <Container>
            <Typography variant="h5">Basics</Typography>
          </Container>
          <Container
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <TextField
              sx={{ margin: 1.5, width: "100%" }}
              variant="standard"
              id="standard-required"
              label="title"
              defaultValue={recipe.title ? recipe.title : null}
            />
            <TextField
              sx={{ margin: 1.5, width: "100%" }}
              type="number"
              variant="standard"
              id="prep time"
              label="Prep time in minutes"
              defaultValue={recipe.prepTime ? recipe.prepTime : null}
            />
          </Container>
          <Container
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <TextField
              sx={{ margin: 1.5, width: "100%" }}
              type="number"
              variant="standard"
              id="cook time"
              label="Cook time in minutes"
              defaultValue={recipe.cookTime ? recipe.cookTime : null}
            />
            <TextField
              sx={{ margin: 1.5, width: "100%" }}
              type="number"
              variant="standard"
              id="servings"
              label="Servings"
              defaultValue={recipe.servings ? recipe.servings : null}
            />
          </Container>
          <Container
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <TextField
              sx={{ margin: 1.5, width: "100%" }}
              variant="standard"
              id="description"
              label="Description"
              defaultValue={recipe.description ? recipe.description : null}
            />
          </Container>
          <Container>
            <Typography variant="h5">Ingredients</Typography>
          </Container>
          <Container>
            <Typography variant="h5">Directions</Typography>
          </Container>
          <Container></Container>
        </form>
      </Card>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const {
    params: { id },
  } = context;

  let recipeData;
  if (id !== "new") {
    const recipeResponse = await fetch(
      `${HTTPConstants.baseUrl}${HTTPConstants.recipesEndpoint}/${id}`
    );
    recipeData = await recipeResponse.json();
  } else {
    recipeData = {};
  }

  return {
    props: {
      recipe: recipeData,
    },
  };
}
