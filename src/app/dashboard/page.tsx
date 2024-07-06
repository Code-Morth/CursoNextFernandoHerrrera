'use client'
import { decrement, increment, useAppDispatch, useAppSelector } from '@/Redux'
import { ImagenByID } from '@/interface/ImagenById'
import { getImagenById } from '@/services/Image.service'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AiTwotoneMinusSquare, AiTwotonePlusSquare } from 'react-icons/ai'

export default function NamePage() {
  const [imageUrl, setimageUrl] = useState<string | undefined>(undefined)

  const count = useAppSelector((state) => state.counter.value)

  const dispatch = useAppDispatch()

  useEffect(() => {
    setimageUrl('')
    ;(async () => {
      try {
        const data: ImagenByID = await getImagenById(count)

        setimageUrl(data?.src?.landscape)
      } catch (error) {
        console.log(error)
        setimageUrl(undefined)
      }
    })()
  }, [count])

  return (
    <main className="grid h-screen w-full place-items-center relative bg-gradient-to-r from-yellow-300 to-yellow-500">
      <div className="relative h-96 w-96">
        <div className="card bg-green-400 shadow-md inline-block w-96 h-96 rounded-3xl absolute bottom-0 transform -rotate-12"></div>
        <div className="card bg-indigo-400 shadow-lg inline-block w-96 h-96 rounded-3xl absolute bottom-0 transform -rotate-6"></div>
        <div className="card bg-pink-500 shadow-lg inline-block w-96 h-96 rounded-3xl absolute bottom-0 transform rotate-6"></div>
        <div className="card bg-white transition shadow-xl w-96 h-96 rounded-3xl absolute bottom-0 z-10 grid place-items-center">
          <div className="card bg-white shadow-inner h-full w-full p-10 flex justify-center items-center flex-col gap-4 rounded-2xl overflow-hidden relative">
            <h1 className="shadow-md text-6xl font-bold text-center text-gray-600 uppercase p-3">
              {count}
            </h1>

            {imageUrl !== undefined ? (
              <Image
                src={imageUrl}
                width={1000}
                className="w-[18rem] h-[9rem]"
                height={1000}
                alt=""
              />
            ) : (
              <iframe
                src="https://giphy.com/embed/Bx59V7wA8ONjVYCzE8"
                width="480"
                height="480"
                frameBorder="0"
                className="w-[18rem] h-[9rem]"
                allowFullScreen
              ></iframe>
            )}
            <div>
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
        </div>
      </div>
    </main>
  )
}
