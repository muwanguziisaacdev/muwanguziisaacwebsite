'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Nav = () => {
  const pathname = usePathname();
  return (
    <>
        <nav className="flex w-full justify-between items-center mt-[15px]">
            <h1 className="logoname">Isaac</h1>
            <ul className="flex flex-nowrap w-[50%]  justify-evenly text-2xl font-medium items-center">
                <Link href={'/'} className={`${pathname === '/'? 'active' : ''}`}>Home</Link>
                <Link href={'/about'} className={`${pathname === '/about' ? 'active' : ''}`}>About Me</Link>
                <Link href={'/project'} className={`${pathname === '/project' ? 'active' : ''}`}>Projects</Link>
                <button className="btn">Get in Touch</button>
            </ul>
        </nav>
    </>
  )
}

export default Nav