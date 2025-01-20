import { ReactNode } from 'react'

interface Props {
  title?: string
  variant?: 'default' | 'info' | 'warning' | 'danger'
  children: ReactNode
}

const Block = ({ title = 'info', variant = 'default', children }: Props) => {
  const variantClass = {
    default: 'bg-gray-500/20',
    info: 'bg-blue-500/20',
    warning: 'bg-yellow-500/20',
    danger: 'bg-red-500/20',
  }

  return (
    <div className={`rounded-lg px-8 py-4 [&>*:last-child]:mb-0 ${variantClass[variant]}`}>
      <h3 className="my-2">{title}</h3>
      {children}
    </div>
  )
}

export default Block
