import React from 'react'

type Props = {
  type?: 'button' | 'submit' | 'reset'
  text?: string
  onClick?: () => void
}

const PrimaryBtn: React.FC<Props> = ({ type = 'button', text, onClick }) => {
  return (
    <>
      <button
        type={type}
        className="px-4 py-2 bg-primary text-white text-sm tracking-[0.1px] font-medium rounded-md"
        onClick={onClick}
      >
        {text}
      </button>
    </>
  )
}

export default PrimaryBtn
