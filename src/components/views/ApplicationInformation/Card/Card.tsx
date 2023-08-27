import { ReactNode } from 'react'

interface CardProps {
  children?: ReactNode
}

export function Card({ children }: CardProps) {
  return (
    <div className=" h-[460px] w-[338px] rounded-lg bg-[#242424] shadow-lg shadow-[#000]/40 ">
      <div className="mx-8 mt-8">{children}</div>
    </div>
  )
}
