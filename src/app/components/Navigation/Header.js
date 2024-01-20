'use client'
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import MobileSideNav from './MobileSideNav'
import { Squash as Hamburger } from 'hamburger-react'

const Header = ({ goBackHref }) => {
  const [isOpen, setOpen] = useState(false)
  const goBack = (e) => {
    e.preventDefault()
    window.history.back()
  }

  return (
    <header className="fixed z-20 w-full bg-white shadow-sm py-2 md:py-5 px-2 md:px-10">
      <div className="flex space-x-3 md:space-x-10 md:justify-end justify-between items-center relative">
        {goBackHref && (
          <button
            onClick={goBack}
            className="text-lightgrey flex text-sm gap-x-2  absolute top-2 left-64 items-center"
          >
            <img src="/images/back.svg" alt="back icon" />
            Back
          </button>
        )}
        <div className="md:hidden flex items-center">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={20}
            easing="ease-in"
            duration={0.4}
          />
        </div>
        <div className="border-right">
          <img src="/images/notif.svg" alt="notifictaion icon" />
        </div>{' '}
        <p className="flex gap-x-1 md:gap-x-3 items-center">
          <img src="/images/individual.svg" alt="person icon" />
          John Doe
        </p>
        <img src="/images/dots.svg" alt="dot icon" />
      </div>
      {isOpen && (
        <div className="w-full">
          <MobileSideNav />
        </div>
      )}
    </header>
  )
}

export default Header
