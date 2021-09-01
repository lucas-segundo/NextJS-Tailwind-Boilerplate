import Image from 'next/image'

export type HeaderNavProps = {
  text: string
}

const HeaderNav = ({ text = 'Hi' }: HeaderNavProps) => (
  <header>
    <Image
      src="/images/nextjs-starter-banner.png"
      width={50}
      height={50}
      alt="Image"
    />
    {text}
  </header>
)

export default HeaderNav
