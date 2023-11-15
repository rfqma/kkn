import cx from 'clsx'

type ButtonProps = {
  children: React.ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button
      className={cx(
        'flex items-center rounded-md mt-8 w-fit bg-darkGreen px-3.5 py-2.5 text-sm font-semibold',
        'text-white shadow-sm hover:bg-darkGreen/90 focus-visible:outline focus-visible:outline-2',
        'focus-visible:outline-offset-2 focus-visible:outline-darkGreen'
      )}
    >
      {children}
    </button>
  )
} 