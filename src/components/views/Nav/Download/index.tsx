'use client'
import Arrow from '@/components/Arrow'
import { useState } from 'react'

export default function Download() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="relative flex flex-col">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-2xl"
      >
        Download
        <Arrow open={isOpen} />
      </button>
      {isOpen && (
        <div className="absolute mt-8 w-full">
          <option
            value="opcao1"
            className=" cursor-pointer rounded-t-sm border bg-white py-2 pl-2 text-black transition-colors hover:bg-gray-200"
          >
            Windows
          </option>
          <option
            value="opcao2"
            className=" cursor-pointer border bg-white py-2 pl-2 text-black transition-colors hover:bg-gray-200"
          >
            MacOS
          </option>
          <option
            value="opcao3"
            className=" cursor-pointer rounded-b-sm border bg-white py-2 pl-2 text-black transition-colors hover:bg-gray-200"
          >
            Android
          </option>
        </div>
      )}
    </div>
  )
}
