import React from 'react'

const Button = ({ text, onClick, disabled }) => {
  return (
    <button
      className={`rounded-md py-2 bg-primary-medium text-white w-full ${
        disabled ? 'opacity-35' : ' '
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button
