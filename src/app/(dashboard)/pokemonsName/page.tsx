import { PokemosGeneral } from '@/components/pokemons/PokemosGeneral';

export default function NamePage() {
  return (
    <div className='w-full'>
      <h1 className='text-[2rem] pl-6 font-semibold'>Lista de pokemones</h1>
      <PokemosGeneral/>
    </div>
  );
}