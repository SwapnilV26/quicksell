import React, { useState } from 'react'
import { GiSettingsKnobs } from 'react-icons/gi'
import { HiOutlineChevronDown } from 'react-icons/hi'
import { Filter } from './Filter';

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className='bg-white h-16 flex items-center'>
        <button
          onClick={() => setShow(!show)}
          className='flex ml-10 py-1 px-3 items-center gap-2 rounded-md border-2 border-gray-100 shadow-md'
        >
          <GiSettingsKnobs className='rotate-90 text-sm' />
          <span className='font-medium text-gray-700 text-sm'>Display</span>
          <HiOutlineChevronDown />
        </button>
      </div>

      { show && <Filter /> }
    </>
  )
}

export default Header