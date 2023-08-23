'use client'
import Arrow from '@/components/Arrow'
import { ReactNode, useState } from 'react'

interface InformationProps {
  title: string
  children?: ReactNode
}

export default function Informations({ title, children }: InformationProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex flex-col text-left">
      <div
        onClick={() => setOpen(!open)}
        className="cursor-p flex  items-center gap-4"
      >
        <Arrow open={open} />
        <h3 className="cursor-pointer text-4xl font-medium text-white phone:text-2xl">
          {title}
        </h3>
      </div>
      {open && <p className="mt-2 text-xl text-white/80">{children}</p>}
    </div>
  )
}
