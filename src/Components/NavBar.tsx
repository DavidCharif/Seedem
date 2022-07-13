import React from 'react'
import logo from '../images/logo.svg'
import { BiMenu } from 'react-icons/bi'

const NavBar = () => {
  const refMenu = React.useRef<HTMLUListElement>(null)

  function handleClick() {
    if (refMenu.current) {
      refMenu.current.classList.toggle('hidden')
      if(!refMenu.current.classList.contains('flex')) {      
        refMenu.current.classList.add('flex')
      }
    }
  }
  return (
    <nav className='p-5 lg:ml-48 lg:mr-48'>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="h-10 sm:mr-5 flex-shrink-0">
            <img src={logo} alt="logo" className='h-full' />
          </span>
          <ul className='py-7 justify-evenly
          list-none text-white flex-col items-center rounded-md bg-primaryViolet w-[90%] h-3/5 absolute top-24 hidden
          sm:flex sm:text-neutralGrayishViolet sm:gap-5 sm:bg-white sm:flex-row sm:w-auto sm:h-full sm:justify-center sm:items-center sm:text-center sm:static'
            ref={refMenu}
          >
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li className='w-4/5'>
            <hr className='border-solid border-t-2 border-neutralGrayishViolet'/>
            </li>
            <li className='md:hidden'>
            <button type='button' className="px-7 py-2 rounded-full hover:text-white hover:bg-primaryCyan transition ease-out duration-500">Login</button>
            </li>
            <li className='w-[90%] text-center md:hidden'>
            <button type='button' className="w-full px-7 py-2 rounded-full hover:text-white bg-primaryCyan transition ease-out duration-500">Sign Up</button>
            </li>    
          </ul>
        </div>
        <div className='gap-3 hidden md:flex text-neutralGrayishViolet'>
          <button type='button' className="px-7 py-2 rounded-full hover:text-white hover:bg-primaryCyan transition ease-out duration-500">Login</button>
          <button type='button' className="rounded-full px-7 py-2 hover:text-white hover:bg-primaryCyan transition ease-out duration-500">Sign Up</button>
        </div>
        <div className='md:hidden'>
          <BiMenu
            className='text-4xl'
            onClick={handleClick}
          />
        </div>
      </div>
    </nav>
  )
}

export default NavBar