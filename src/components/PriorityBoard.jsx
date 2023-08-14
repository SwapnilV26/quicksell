import React, { useContext } from 'react'
import { IoMdAdd } from 'react-icons/io'
import { BsThreeDots } from 'react-icons/bs'
import Card from './Card'
import { BoardContext } from '../context/BoardContext'

const PriorityBoard = ({id, name}) => {
    const { tickets } = useContext(BoardContext);

    const cardData = tickets?.filter((item)=> item.priority === id);
    const cardLength = cardData?.length;

    console.log("p",cardData);
   
  return (
    <div className='w-1/5'>
        <div className='flex justify-between mx-2'>
            <div className='flex gap-1'>
                <p className='text-gray-700 font-medium'>{name}</p>
                <span className='text-gray-500 pl-2'>{cardLength}</span>
            </div>
            <div className='flex gap-1 text-gray-500'>
                <IoMdAdd />
                <BsThreeDots />
            </div>
        </div>

        <div className='mt-5'>
            {
                cardData && cardData?.map((item)=>{
                    return <Card key={item.id} data={item} />
                })
            }
        </div>
    </div>
  )
}

export default PriorityBoard