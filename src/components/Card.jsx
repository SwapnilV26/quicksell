import React from 'react'
import {BiSolidCircle} from 'react-icons/bi'

const Card = () => {
  return (
    <div className='bg-white p-4 mb-2 rounded-lg shadow-md'>
        <div className='flex justify-between text-gray-500'>
            <span>CAM-2</span>
            <p>userId</p>
        </div>
        <h3 className='text-lg font-bold tracking-tight text-gray-900 mb-2 h-14 overflow-hidden'>Add Multi-Language Support - Enable multi-language support within the application.</h3>
        <div className='flex gap-1'>
            <span>priority</span>
            <div className='border text-sm px-1 border-gray-200 flex gap-1 items-center rounded'>
                <BiSolidCircle className='text-gray-300' />
                <span className='text-gray-500'>Feature Request</span>
            </div>
        </div>
    </div>
  )
}

export default Card