/* eslint-disable @next/next/no-img-element */
import React from 'react'

const AuthLayout = ({ children }) => {
  return (
    <div
      className="flex flex-col
     md:flex-row gap-8"
    >
      <div className="bg-primary h-28 md:h-screen p-8 flex items-center">
        <img
          src="/images/starwars.png"
          alt="starwars img"
          className="w-24 md:w-full"
        />
      </div>
      <div className="w-full h-full my-10 md:my-20 self-center">{children}</div>
    </div>
  )
}

export default AuthLayout
