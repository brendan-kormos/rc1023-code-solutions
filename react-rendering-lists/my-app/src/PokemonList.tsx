type Pokemon = { number: string; name: string };
type Props = {
  pokedex: Pokemon[];
};

export default function PokemonList({ pokedex }: Props) {
  const listItems = pokedex.map((pokemon) => <li>{pokemon.name}</li>);
  console.log(listItems);
  return <ul>{listItems}</ul>;
}
