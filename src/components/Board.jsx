import React, { useContext, useEffect, useState } from 'react'
import { IoMdAdd } from 'react-icons/io'
import { BsThreeDots } from 'react-icons/bs'
import Card from './Card'
import { BoardContext } from '../context/BoardContext'

const Board = ({factor, name}) => {
    const { group, order, tickets, users } = useContext(BoardContext);

    const [cardData, setCardData] =  useState([]);

    useEffect(()=>{
        if(group === "status"){
            const newData = tickets?.filter((item)=> item.status === factor).sort((a, b)=>{
                if(order === "priority"){
                    return b.priority - a.priority;
                } else{
                    return a.title.localeCompare(b.title);
                }
            });
            setCardData(newData);
        } else if (group === "priority"){
            const newData = tickets?.filter((item)=> item.priority === factor).sort((a, b)=>{
                if(order === "priority"){
                    return b.priority - a.priority;
                } else{
                    return a.title.localeCompare(b.title);
                }
            });
            setCardData(newData);
        } else {
            const newData = tickets?.filter((item)=> item.userId === factor).sort((a, b)=>{
                if(order === "priority"){
                    return b.priority - a.priority;
                } else{
                    return a.title.localeCompare(b.title);
                }
            });
            setCardData(newData);
        }

        console.log("first", group, factor,  cardData)
    }, [factor, name, group, tickets, order, users])

   
  return (
    <div className='w-1/5'>
        <div className='flex justify-between mx-2'>
            <div className='flex gap-1'>
                <p className='text-gray-700 font-medium'>{name}</p>
                <span className='text-gray-500 pl-2'>{cardData?.length}</span>
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

export default Board