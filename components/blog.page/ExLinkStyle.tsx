import Block from '@/components/Block'

const ExLinkStyle1 = () => {
  return (
    <Block title="Example link style 1">
      <span className="relative before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] before:bg-sky-600 before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-y-100">
        <span className="relative">Link Style 1</span>
      </span>
    </Block>
  )
}

const ExLinkStyle2 = () => {
  return (
    <Block title="Example link style 2">
      <span className="group relative inline-block overflow-hidden rounded-lg bg-gray-200 px-6 py-3 [transform:translateZ(0)] before:absolute before:bottom-0 before:left-0 before:h-full before:w-full before:-translate-x-full before:bg-sky-600 before:transition before:duration-500 before:ease-in-out hover:before:translate-x-0">
        <span className="relative z-0 text-black transition duration-500 ease-in-out group-hover:text-gray-200">
          Link Style 2
        </span>
      </span>
    </Block>
  )
}

export { ExLinkStyle1, ExLinkStyle2 }
