import React from 'react'
import logo from '../images/logoWhite.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import instagram from '../images/icon-instagram.svg'
import pinterest from '../images/icon-pinterest.svg'


const Footer = () => {
  return (
    <div className='bg-veryDarkViolet w-screen flex flex-col sm:flex-row items-center justify-center py-20 sm:justify-start sm:items-start'>
      
      <span className="w-1/5 h-10 mx-auto sm:mr-5 flex-shrink-0 mt-10">
            <img src={logo} alt="logo" className='h-full' />
      </span>
      
      <ul className='list-none sm:w-3/5 mx-auto flex flex-col justify-center items-center mt-10 text-neutralGray  gap-2'>
        <li className='mb-4'>
          <p className='font-semibold text-white'>Features</p>
        </li>
        <li>
          <p>Link shortening</p>
        </li>
        <li>
          <p>Branded Links</p>
        </li>
        <li>
          <p>Analytics</p>
        </li>
      </ul>
      <ul className='list-none w-full sm:w-3/5 mx-auto flex flex-col justify-center items-center mt-10 text-neutralGray  gap-2'>
        <li className='mb-4'>
          <p className='font-semibold text-white'>Resources</p>
        </li>
        <li>
          <p>Blog</p>
        </li>
        <li>
          <p>Developers</p>
        </li>
        <li>
          <p>Support</p>
        </li>
      </ul>
      <ul className='list-none w-full sm:w-3/5 mx-auto flex flex-col justify-center items-center mt-10 text-neutralGray  gap-2'>
        <li className='mb-4'>
          <p className='text-white font-semibold'>Company</p>
        </li>
        <li>
          <p>About</p>
        </li>
        <li>
          <p>Our Team</p>
        </li>
        <li>
          <p>Careers</p>
        </li>
        <li>
          <p>Contact</p>
        </li>
      </ul>
      <div className='flex mt-10 sm:w-3/5 gap-5'>
        <img src={facebook} alt="facebook" className='h-6 w-6 mr-2' />
        <img src={twitter} alt="twitter" className='h-6 w-6 mr-2' />
        <img src={instagram} alt="instagram" className='h-6 w-6 mr-2' />
        <img src={pinterest} alt="pinterest" className='h-6 w-6 mr-2' />
      </div>
    </div>
  )
}

export default Footer