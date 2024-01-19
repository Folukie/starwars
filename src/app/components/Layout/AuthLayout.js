/* eslint-disable @next/next/no-img-element */
import React from 'react'

const AuthLayout = ({ children }) => {
  return (
    <div className="flex gap-8">
      <div className="bg-primary h-screen p-8 flex items-center">
        <img src="/images/starwars.png" alt="starwars img" />
      </div>
      <div className="w-full h-full my-20 self-center">{children}</div>
    </div>
  )
}

export default AuthLayout
