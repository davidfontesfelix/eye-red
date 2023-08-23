import { ReactNode } from 'react'

interface TitleProps {
  children?: ReactNode
}

export function Title({ children }: TitleProps) {
  return <h3 className="text-4xl font-medium">{children}</h3>
}
