interface ArrowProps {
  open: boolean
}

export default function Arrow({ open }: ArrowProps) {
  return (
    <div className="flex cursor-pointer">
      <div
        className={`-mr-[2px] h-[2px] w-3 transition-transform duration-150 ${
          open ? 'rotate-0' : 'rotate-[25deg]'
        }  bg-white`}
      ></div>
      <div
        className={`h-[2px] w-3 transition-transform duration-150 ${
          open ? '-rotate-0' : '-rotate-[25deg]'
        }  bg-white`}
      ></div>
    </div>
  )
}
