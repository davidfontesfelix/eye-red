import Image from 'next/image'
import Download from './Download'

export default function Nav() {
  return (
    <nav className="absolute flex h-16 w-full items-center justify-between px-[10%] text-white">
      <div className="flex items-center gap-4">
        <Image width={50} height={45} src="/icons/icon-logo.svg" alt="logo" />
        <h2 className="text-3xl">
          Eye<span className="text-red-700">Red</span>
        </h2>
      </div>
      <div className="phone:hidden">
        <Download />
      </div>
    </nav>
  )
}
