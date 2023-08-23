interface HeadingProps {
  children: string
}

export default function Heading({ children }: HeadingProps) {
  return (
    <h2 className="mx-[10%] mt-10 text-center text-5xl font-bold text-white phoneSm:text-xl phone:text-3xl tablet:text-3xl">
      {children}
    </h2>
  )
}
