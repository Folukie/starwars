/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Header = () => {
  return (
    <header className="fixed z-20 w-full bg-white shadow-sm py-5 px-10">
      <div className="flex space-x-10 justify-end">
        <div className="border-right">
          <img src="/images/notif.svg" alt="notifictaion icon" />
        </div>{' '}
        <p className="flex gap-x-3 items-center">
          <img src="/images/individual.svg" alt="person icon" />
          John Doe
        </p>
        <img src="/images/dots.svg" alt="dot icon" />
      </div>
    </header>
  )
}

export default Header
