import React from 'react'
import cn from 'classnames'

type Props = {
  type?: 'button' | 'submit' | 'reset'
  text?: string
  hasIcon?: boolean
  icon?: React.ReactNode
  onClick?: () => void
  className?: any
}

const ActionBtn: React.FC<Props> = ({
  type = 'button',
  text,
  hasIcon,
  icon,
  onClick,
  className,
}) => {
  return (
    <>
      <button
        type={type}
        className={cn(
          'md:px-3 px-2 py-2 flex gap-2 items-center text-sm text-black-900 font-medium tracking-[0.1px] rounded-lg border border-black-100 shadow-sm bg-white truncate',
          className,
        )}
        onClick={onClick}
      >
        <span>{text}</span>
        {hasIcon && icon}
      </button>
    </>
  )
}

export default ActionBtn
