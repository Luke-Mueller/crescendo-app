import { useRef, useState } from "react";
import Link from "next/link";
import { Container, Fab, Grid, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import GridItem from "../components/GridItem";
import Adornment from "../components/Adornment";
import Spinner from "../components/Spinner";

import UIConstants from "../constants/ui";
import HTTPConstants from "../constants/http";

export default function Recipes({ recipes }) {
  const [displayedRecipes, setDisplayedRecipes] = useState(recipes);
  const [error, setError] = useState(UIConstants.initialErrorObj);
  const inputRef = useRef();

  if (!recipes.length) return <Spinner />;

  async function submitHandler(event) {
    event.preventDefault();
    const userInput = inputRef.current.value.trim();
    if (!userInput) {
      setDisplayedRecipes(recipes);
      return;
    }
    const newRecipesArray = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(userInput.toLowerCase())
    );

    setDisplayedRecipes(newRecipesArray);

    inputRef.current.value = null;
  }

  return (
    <Container
      sx={{
        width: "100%",
        minWidth: "500px",
        paddingLeft: 5,
        paddingRight: 5,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography color="text.primary" variant="h4">
          Recipes
        </Typography>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Link href={{
            pathname: "/addEditRecipe/[id]",
            query: {
              id: "new"
            }
          }}>
            <Fab
              sx={{ marginLeft: 2 }}
              color="secondary"
              size="small"
              aria-label="add"
            >
              <AddIcon />
            </Fab>
          </Link>
          <TextField
            color="secondary"
            onChange={() => setError({ hasError: false, message: " " })}
            error={error.hasError}
            helperText={error.message}
            InputProps={{
              endAdornment: <Adornment submitHandler={submitHandler} />,
            }}
            inputRef={inputRef}
            label="Search recipes"
            sx={{
              width: UIConstants.inputWidth,
              minWidth: UIConstants.inputMinWidth,
              marginLeft: "auto",
            }}
            variant="standard"
          />
        </div>
      </div>
      <br />
      <Grid container columns={3.0} columnSpacing={1}>
        {displayedRecipes.map((recipe) => (
          <GridItem key={recipe.uuid} recipe={recipe} />
        ))}
      </Grid>
    </Container>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    `${HTTPConstants.baseUrl}${HTTPConstants.recipesEndpoint}`
  );
  const data = await response.json();
  return {
    props: {
      recipes: data,
    },
  };
}
