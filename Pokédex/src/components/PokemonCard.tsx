import "../App.css";

interface PokemonProps {
  name: string;
  imgSrc?: number;
}

function PokemonCard({ pokemon }: PokemonProps) {
  return (
    <figure className="Test">
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
