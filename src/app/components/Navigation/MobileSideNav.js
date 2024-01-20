/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Navigations } from '../../constants/navigation'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MobileSideNav = ({ close, isOpen }) => {
  const pathname = usePathname()

  return (
    <nav
      className={`bg-primary sidebar h-screen p-4 w-full left-0 block transition-all duration-300 transform ${
        isOpen ? '-translate-x-full' : ''
      }`}
    >
      <div className="flex justify-center">
        <img alt="star wars icon" src="/images/starwars.png" className="w-28" />
      </div>
      <div className="py-12 space-y-10 ">
        <Link
          href="/pages/overview"
          className={`text-white flex gap-x-2 p-3 ${
            pathname === '/pages/overview' && 'bg-primary-medium  rounded-sm'
          }`}
        >
          <img src="/images/overview.svg" alt="overview-icon" className="w-6" />
          Overview
        </Link>
        <p className="bg-blue bg-pink bg-yellow  bg-green hidden"></p>
        <ul className="space-y-5">
          {Navigations.map((navItem, idx) => (
            <li
              key={idx}
              className={`  p-3  ${
                pathname == `/pages/${navItem.name.toLowerCase()}`
                  ? 'bg-primary-medium  rounded-sm'
                  : ''
              }`}
            >
              <Link
                href={navItem.route}
                className="flex space-x-5 items-center"
              >
                <p className={`${navItem.color} w-4 h-4 rounded-sm`}></p>
                <p className="text-white">{navItem.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-6 py-10 px-10">
        <a className="font-bold text-center text-white " href="/">
          Log Out
        </a>
      </div>
    </nav>
  )
}

export default MobileSideNav
