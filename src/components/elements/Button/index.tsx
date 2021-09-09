import { ButtonHTMLAttributes } from 'react'

export type ButtonProps = {
  color?: ButtonColorEnum
  isPill?: boolean
  children: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export enum ButtonColorEnum {
  BLUE = 'bg-blue-500',
  YELLOW = 'bg-yellow-400'
}

const Button = ({
  color = ButtonColorEnum.BLUE,
  isPill,
  children,
  ...props
}: ButtonProps) => (
  <button
    {...props}
    type="button"
    className={`px-4 py-2 ${props.className} ${color} ${
      isPill && 'rounded-full'
    } text-white font-bold`}
  >
    {children}
  </button>
)

export default Button
