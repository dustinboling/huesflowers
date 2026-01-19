import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'bg-lime-800 font-semibold text-lime-100 hover:bg-lime-700 active:bg-lime-800 active:text-lime-100/70 dark:bg-lime-700 dark:hover:bg-lime-600 dark:active:bg-lime-700 dark:active:text-lime-100/70',
  secondary:
    'bg-lime-50 font-medium text-lime-900 hover:bg-lime-100 active:bg-lime-100 active:text-lime-900/60 dark:bg-lime-800/50 dark:text-lime-300 dark:hover:bg-lime-800 dark:hover:text-lime-50 dark:active:bg-lime-800/50 dark:active:text-lime-50/70',
}

type ButtonProps = {
  variant?: keyof typeof variantStyles
} & (
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
  | React.ComponentPropsWithoutRef<typeof Link>
)

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
