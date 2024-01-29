import React from 'react'
import { LOGO } from '../utils/constant'

const Header = () => {
  return (
    <div className='bg-gradient-to-t from-black absolute w-full'>
        <div className='ml-20 p-4'>
            <img
            alt='logo'
            className='w-40'
            src = {LOGO}
            >
            </img>
        </div>
    </div>
  )
}

export default Header