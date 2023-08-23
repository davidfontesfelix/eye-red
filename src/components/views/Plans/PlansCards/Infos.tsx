import { ReactNode } from 'react'

interface InfosProps {
  children: ReactNode
}

export function Infos({ children }: InfosProps) {
  return (
    <>
      <div className="mx-8 mt-2 flex items-center gap-4">
        <div className="h-2 w-1 rounded-full bg-white" />
        <h4 className="text-xl">{children}</h4>
      </div>
    </>
  )
}
