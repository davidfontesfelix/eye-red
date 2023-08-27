'use client'
import Arrow from '@/components/Arrow'
import { ReactNode, useState } from 'react'

interface CardProps {
  title: string
  color: string
  price?: string
  children?: ReactNode
}

export function Card({ title, color, price, children }: CardProps) {
  const [open, setOpen] = useState(false)

  const spacing = () => {
    if (open) {
      if (title === 'Plano Coruja') {
        return 'mb-12'
      }
    }
  }
  return (
    <div
      className={`h-full w-[320px] rounded-lg bg-[#434343] text-left phone:w-[100%] tablet:w-[100%] ${spacing()}`}
    >
      <div
        onClick={() => setOpen(!open)}
        className={`w-full ${color} flex h-20 items-center gap-4 rounded-t-lg pl-8 phone:cursor-pointer tablet:cursor-pointer laptop:justify-center laptop:pl-0 largerDesktop:justify-center largerDesktop:pl-0`}
      >
        <div className="hidden phone:block tablet:block">
          <Arrow open={open} />
        </div>
        <h3 className="text-4xl font-medium">{title}</h3>
      </div>
      <div
        className={`${
          open ? 'phone:block tablet:block' : 'phone:hidden tablet:hidden'
        }`}
      >
        {price ? (
          <h4 className="relative mt-6 w-full text-center text-6xl font-bold">
            <span className="absolute top-1 -ml-4 text-sm">R$</span>
            {price}
            <span className="text-sm">/ano</span>
          </h4>
        ) : (
          <h4 className="mt-6 w-full text-center text-6xl font-bold uppercase">
            Grátis
          </h4>
        )}
      </div>
      <div
        className={`mt-6 h-[400px] w-full ${color} phone:h-full tablet:h-full ${
          open ? 'phone:block tablet:block' : 'phone:hidden tablet:hidden'
        }`}
      >
        <div className="pb-4 pt-4">{children}</div>
      </div>
      <div
        className={`my-8 flex justify-center ${
          open ? 'phone:flex tablet:flex' : 'phone:hidden tablet:hidden'
        }`}
      >
        {price ? (
          <button
            className={`rounded-lg px-20 py-4 text-xl font-bold ${color} transition-colors hover:brightness-75`}
          >
            Comprar Agora
          </button>
        ) : (
          <button
            className={`rounded-lg px-20 py-4 text-xl font-bold transition-colors hover:brightness-75 ${color}`}
          >
            Baixar Agora
          </button>
        )}
      </div>
    </div>
  )
}
