import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="flex h-full items-center justify-between bg-black px-[10%] py-4 text-white/80 phone:flex-col phone:gap-4 largerDesktop:px-[15%]">
      <div>
        <div className="flex items-center gap-4">
          <Image
            width={40}
            height={35}
            src="/icons/icon-logo.svg"
            alt="icon EyeRed"
          />
          <h4 className="text-2xl">EyeRed</h4>
        </div>
        <p className="text-base">© 2023 EyeRed</p>
      </div>
      <div className="flex gap-4">
        <a href="/">
          <Image
            src="/icons/instagram.svg"
            width={40}
            height={40}
            alt="instagram sem link"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/david-fontes-9b84a4201/"
          target="_blank"
        >
          <Image
            src="/icons/linkedin.svg"
            width={40}
            height={40}
            alt="link do linkedin de David Fontes"
          />
        </a>
        <a href="https://wa.me/5579999634862" target="_blank">
          <Image
            src="/icons/whatsapp.svg"
            width={40}
            height={40}
            alt="link do whatsapp de David Fontes"
          />
        </a>
      </div>
    </footer>
  )
}
