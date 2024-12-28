'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Nav = () => {
  const pathname = usePathname();
  return (
    <>
        <nav className="flex w-full justify-between items-center mt-[15px] ">
            <h1 className="logoname">Isaac</h1>
            <ul className="hidden xl:flex flex-nowrap w-[50%]  justify-evenly text-2xl font-medium text-gray-500 items-center">
                <Link href={'/'} className={`${pathname === '/'? 'active' : ''}`}>Home</Link>
                <Link href={'/project'} className={`${pathname === '/project' ? 'active' : ''}`}>Projects</Link>
                <Link href={'/contact'} className={`${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>

            </ul>
            <div className="nav-open-btn block xl:hidden">
              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </div>
        </nav>
    </>
  )
}

export default Nav