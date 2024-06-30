import { PokemonByIDInterface } from "@/interface/pokemonByIdInterface"
import { PokemonsInterface } from "@/interface/pokemonsInterface"
import { notFound } from 'next/navigation'

const { POKEMON_URL } = process.env

const getPokemons = async (): Promise<PokemonsInterface | undefined> => {
  try {
    const response: Response = await fetch(`${POKEMON_URL}?limit=100&offset=1`)

    const pokemons: PokemonsInterface =
      (await response.json()) as PokemonsInterface

    return pokemons
  } catch (error) {
    console.log(error)
    notFound()
  }
}

const getPokemonsById = async (
  id: string
): Promise<PokemonByIDInterface | undefined> => {
  try {
    const response = await fetch(`${POKEMON_URL}/${id}`)

    const pokemons = (await response.json()) as PokemonByIDInterface

    return pokemons
  } catch (error) {
    console.log(error)
    notFound()
  }
}

export { getPokemons, getPokemonsById }
