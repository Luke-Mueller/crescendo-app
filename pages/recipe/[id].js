import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import dateFormat from "dateformat";
import HTTPConstants from "../../constants/http";

export default function Recipe({ recipe, specials }) {
  const fullDate = dateFormat(new Date(recipe.postDate), "mmmm dS, yyyy");

  console.log(recipe);
  console.log("s", specials);

  return (
    <Container maxWidth={"sm"}>
      <Card sx={{ height: "100%" }}>
        <CardHeader title={recipe.title} subheader={fullDate} />
        <CardMedia
          component="img"
          height="194"
          src={`${recipe.images.full}`}
          alt="image of food"
        />
        <CardContent>
          <Container
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Prep: {recipe.prepTime} min
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Cooking: {recipe.cookTime} min
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Total: {recipe.cookTime + recipe.prepTime} min
            </Typography>
          </Container>
          <br />
          <Typography variant="subtitle1" color="text.secondary">
            Ingredients
          </Typography>
          {recipe.ingredients.map((ingredient) => {
            let ingredientString = "";
            if (ingredient.amount) {
              if (Number.isInteger(ingredient.amount)) {
                ingredientString = ingredientString.concat(
                  ingredient.amount,
                  " "
                );
              } else {
                ingredientString = ingredientString.concat(
                  ingredient.amount?.toFixed(2),
                  " "
                );
              }
            }
            if (ingredient.measurement) {
              ingredientString = ingredientString.concat(
                ingredient.measurement,
                " "
              );
            }
            if (ingredient.name) {
              ingredientString = ingredientString.concat(ingredient.name);
            }
            return (
              <Container style={{ marginBottom: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  {ingredientString}
                </Typography>
              </Container>
            );
          })}
          <br />
          <Typography variant="subtitle1" color="text.secondary">
            Directions
          </Typography>
          {recipe.directions.map((direction, index) => {
            let directionString = `${index + 1}. ${direction.instructions}`;
            if (direction.optional)
              directionString = directionString.concat(" ", "(Optional)");
            return (
              <Container style={{ marginBottom: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  {}
                  {directionString}
                </Typography>
              </Container>
            );
          })}
          <br />
          <Typography variant="subtitle1" color="text.secondary">
            Specials
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const {
    params: { id },
  } = context;
  const recipeResponse = await fetch(
    `${HTTPConstants.baseUrl}${HTTPConstants.recipesEndpoint}/${id}`
  );
  const recipeData = await recipeResponse.json();
  const specialsResponse = await fetch(
    `${HTTPConstants.baseUrl}${HTTPConstants.specialsEndpoint}`
  );
  const specialsData = await specialsResponse.json();

  return {
    props: {
      recipe: recipeData,
      specials: specialsData,
    },
  };
}

// specials.forEach((special) => {
//   if (special.ingredientId === ingredient.uuid) {
//     specialDis = (
//       <Container>
//         <Typography variant="body1" color="text.secondary">
//           {special.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {special.text}
//         </Typography>
//       </Container>
//     );
//   }
// });
