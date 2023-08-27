'use client'
import Image from 'next/image'

export default function Header() {
  function scrollToSection() {
    const targetSection = document.getElementById('Section')
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <header className=" h-screen w-full text-white">
      <div className="gradient flex h-screen w-full items-center justify-between gap-16 px-[10%]">
        <div className="">
          <h1 className="mb-6 max-w-[820px] text-5xl font-bold phone:text-3xl">
            Aqui você encontra a cybersegurança do lado hacker de enxergar.
          </h1>
          <div className="mb-4 h-[1px] w-44 bg-white" />
          <h2 className="mb-8 max-w-2xl text-2xl font-medium opacity-80 phone:text-base">
            Mantenha o uso da internet de modo seguro, confiável e anônimo com o
            nosso método de segurança totalmente inovador.
          </h2>
          <button
            onClick={() => scrollToSection()}
            className="mb-4 rounded bg-[#A60303] px-12 py-2 text-2xl font-bold uppercase"
          >
            conferir planos
          </button>
          <p className="text-sm tracking-wide opacity-80">
            Windows® | macOS® | Android™ | iOS®
          </p>
        </div>
        <div className="phone:hidden tablet:hidden">
          <Image
            className="rounded-lg"
            width={470}
            height={420}
            src="/icons/icon-logo.svg"
            alt="icon do site"
          />
        </div>
      </div>
    </header>
  )
}
