import { Navbar, NavbarCollapse, NavbarLink, NavbarToggle, TextInput } from 'flowbite-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { Button } from 'flowbite-react'
import { FaMoon } from 'react-icons/fa'
function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2 pt-2 pb-2'>
        <Link to="/" className="font-semibold self-center whitespace-nowrap text-sm sm:text-xl dark:text-white">

        <span className=' mr-1 px-2 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white font-semibold'>Kinza's</span>

        Blog
        </Link>
        <form>
           <TextInput
           type='text'
            placeholder='Search ...'
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline'
           />
        </form>
        <Button className="w-12 h-12 lg:hidden " color="gray"  pill>
          <AiOutlineSearch />
        </Button>
        <div className='flex gap-2 md:order-2'>
          <Button className='w-10 h-10  hidden sm:inline px-3.5' color='gray' pill>
            <FaMoon className='self-center'/>
          </Button>
          <Link to="/signin">
          <Button className='bg-linear-to-r from-indigo-500 to-blue-500'>
            Sign In
          </Button>
          </Link>
          <NavbarToggle/>

        </div>
        <NavbarCollapse>
          <NavbarLink active={path==="/"} as={'div'}>
            <Link to="/">
              Home
            </Link>
            </NavbarLink>
            <NavbarLink active={path==="/projects"} as={'div'}>
              <Link to="/projects">
              Projects
              </Link>
            </NavbarLink>

            <NavbarLink active={path==="/about"} as={'div'}>
              <Link to="/about">
              About
              </Link>
            </NavbarLink>
          </NavbarCollapse>

    
    </Navbar>
  )
}

export default Header