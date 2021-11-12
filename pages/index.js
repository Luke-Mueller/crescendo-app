import Spinner from '../components/Spinner';

export default function Recipes(recipes) {
  console.log('recipes: ',recipes)
  return <h1>Recipes Page</h1>;
}

export async function getStaticProps() {
  const response = await fetch(`http://localhost:3001/recipes`);
  const data = await response.json();
  return {
    props: {
      recipes: data,
    },
  };
}
