import React from 'react'

const Input = ({ name, value, title, onChange }) => {
  const handleChange = (e) => {
    const check =
      e.target.value?.length > 1
        ? !Array.from(e.target.value).every((char) => char === ' ')
        : true
    if (check) {
      onChange(e)
    }
  }

  return (
    <div>
      <div className="relative">
        <label className="absolute -top-2 left-2 px-1 text-xs  bg-white text-lightgrey">
          {title}
        </label>
        <input
          className="border border-grey rounded-sm w-full h-10 px-2 text-sm"
          name={name}
          required
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default Input
