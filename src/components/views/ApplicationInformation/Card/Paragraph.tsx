import { ReactNode } from 'react'

interface ParagraphProps {
  children: ReactNode
}

export function Paragraph({ children }: ParagraphProps) {
  return (
    <>
      <div className="mb-6 mt-8 h-1 w-36 bg-white opacity-40" />
      <p className="text-xl">{children}</p>
    </>
  )
}
