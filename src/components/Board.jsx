import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import { BsThreeDots } from 'react-icons/bs'
import Card from './Card'

const Board = () => {
  return (
    <div className=''>
        <div className='flex justify-between'>
            <div className='flex gap-1'>
                <p className='text-gray-700 font-medium'>Todo</p>
                <span className='text-gray-500'>3</span>
            </div>
            <div className='flex gap-1 text-gray-500'>
                <IoMdAdd />
                <BsThreeDots />
            </div>
        </div>

        <div className='mt-5'>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default Board