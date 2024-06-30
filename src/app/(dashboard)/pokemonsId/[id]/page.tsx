import { PokemonByIDInterface } from "@/interface/pokemonByIdInterface"
import { getPokemonsById } from "@/services/Pokemons.service"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

interface NamePageProps {
  params: {
    id: string
  }
  searchParams: {
    name: string
  }
}

export async function generateMetadata ({params,searchParams}:NamePageProps):Promise<Metadata>{

  const metadata:Metadata ={

    title:`${searchParams.name}`,
    description:`Pokemon con el nombre ${searchParams.name} y con id ${params.id}`
  }

  return metadata

}


export default async function NamePage(props: NamePageProps) {
  const { params, searchParams } = props

  const pokemonData: PokemonByIDInterface = (await getPokemonsById(
    params.id
  )) as PokemonByIDInterface

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="relative h-fit max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full flex justify-center pb-10">
              <div className="relative">
                <Image
                  width={1000}
                  height={1000}
                  alt="Pokemon image"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${params.id}.svg`}
                  className=" bg-transparent align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                />
              </div>
            </div>
            <div className="w-full text-center mt-20">
              <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    {pokemonData?.height}
                  </span>
                  <span className="text-sm text-slate-400">Vida</span>
                </div>
                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    {pokemonData?.weight}
                  </span>
                  <span className="text-sm text-slate-400">Peso</span>
                </div>

                <div className="p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                    {pokemonData?.abilities.length}
                  </span>
                  <span className="text-sm text-slate-400">Habilidades</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1 capitalize">
              {searchParams?.name}
            </h3>
          </div>
          <div className="mt-6 py-6 border-t border-slate-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                <Link
                  href="/pokemons"
                  className="font-normal text-slate-700 hover:text-slate-400"
                >
                  Todos los Pokemons
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
