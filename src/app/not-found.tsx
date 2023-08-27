export default function notFound() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-black">
      <h1 className="animate-pulse text-[30vw] font-bold leading-[30vw] text-[#4d0707] phone:text-[40vw] phone:leading-[40vw]">
        404
      </h1>
      <p className="text-5xl text-white/80 phone:text-2xl ">
        Pagina não encontrada
      </p>
    </div>
  )
}
