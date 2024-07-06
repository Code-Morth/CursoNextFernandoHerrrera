'use client'
import {
  decrement,
  increment,
  incrementByAmount,
  useAppDispatch,
  useAppSelector
} from '@/Redux'
import { AiTwotoneMinusSquare, AiTwotonePlusSquare } from 'react-icons/ai'

export default function NamePage() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <>
      <div className="w-64 h-fit m-auto cursor-pointer border b-gray-400 rounded flex flex-col justify-center items-center text-center p-6 bg-white">
        <p className="text-gray-700 mb-2">Numero Global</p>
        <h1 className="text-6xl font-bold text-gray-900 mb-6">{count}</h1>
        <div className="flex justify-between w-full">
          <button
            onClick={() => dispatch(increment())}
            className="flex gap-2 items-center text-gray-700 px-2"
          >
            <AiTwotonePlusSquare />
            <p>Sumar</p>
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="flex gap-2 items-center text-gray-700 px-2"
          >
            <AiTwotoneMinusSquare />
            <p>Restar</p>
          </button>
        </div>
      </div>
    </>
  )
}
