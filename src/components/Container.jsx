import clsx from 'clsx'

export function Container({ className, ...props }) {
  return (
    <div
      ID="OLD_CONTAINER"
      className={clsx(
        'xl:px-30 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    />
  )
}
