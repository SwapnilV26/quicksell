import React, { useContext, useEffect, useState } from 'react'
import { IoMdAdd } from 'react-icons/io'
import { BsThreeDots } from 'react-icons/bs'
import Card from './Card'
import { BoardContext } from '../context/BoardContext'
import { TbCircleDotted } from 'react-icons/tb'
import { BiSolidCircle } from 'react-icons/bi'

const Board = ({ factor, name, available }) => {
    const { group, order, tickets, users, status, priority } = useContext(BoardContext);

    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        if (group === "status") {
            const newData = tickets?.filter((item) => item.status === factor).sort((a, b) => {
                if (order === "priority") {
                    return b.priority - a.priority;
                } else {
                    return a.title.localeCompare(b.title);
                }
            });
            setCardData(newData);
        } else if (group === "priority") {
            const newData = tickets?.filter((item) => item.priority === factor).sort((a, b) => {
                if (order === "priority") {
                    return b.priority - a.priority;
                } else {
                    return a.title.localeCompare(b.title);
                }
            });
            setCardData(newData);
        } else {
            const newData = tickets?.filter((item) => item.userId === factor).sort((a, b) => {
                if (order === "priority") {
                    return b.priority - a.priority;
                } else {
                    return a.title.localeCompare(b.title);
                }
            });
            setCardData(newData);
        }

        // console.log("first", group, factor, cardData)
    }, [factor, name, group, tickets, order, users])

    const getStatusIcon = (name) => {
        const temp = status.find((s) => s.name === name);
        return temp ? temp.icon : <TbCircleDotted />
    }

    const getPriorityIcon = (factor) => {
        const temp = priority.find((p) => p.id === factor);
        return temp ? temp.icon : <BsThreeDots />
    }

    return (
        <div className='mb-8 lg:w-1/5'>
            <div className='flex justify-between mx-2'>
                <div className='flex gap-1 items-center'>
                    {group === 'status' && getStatusIcon(name)}
                    {group === 'priority' && getPriorityIcon(factor)}
                    {group === 'user' &&
                        <div className='relative w-10 h-10'>
                            <img className='rounded-full' src={`https://ui-avatars.com/api/?name=${name}`} alt='user-profile' />
                            <BiSolidCircle className={`absolute left-7 bottom-0 ${available ? 'text-green-500' : 'text-gray-300'}`} />
                        </div>
                    }
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
                    cardData && cardData?.map((item) => {
                        return <Card key={item.id} data={item} />
                    })
                }
            </div>
        </div>
    )
}

export default Board