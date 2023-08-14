import React, { useContext, useEffect, useState } from 'react'
import { BiSolidCircle } from 'react-icons/bi'
import { BoardContext } from '../context/BoardContext';
import { BsThreeDots } from 'react-icons/bs';
import { TbCircleDotted } from 'react-icons/tb';

const Card = ({ data }) => {
  const [user, setUser] = useState(null)
  const { group, users, priority, status } = useContext(BoardContext);

  useEffect(() => {
    const temp = users.find((u) => {
      return u.id === data?.userId;
    })
    setUser(temp);
  }, [users])

  const getStatusIcon = (name) => {
    const temp = status.find((s) => s.name === name);
    return temp ? temp.icon : <TbCircleDotted />
  }

  const getPriorityIcon = (prId) => {
    const temp = priority.find((p) => p.id === prId);
    return temp ? temp.icon : <BsThreeDots />
  }

  return (
    <div className='bg-white p-4 mb-2 w-full rounded-lg shadow-md'>
      <div className='flex justify-between items-center text-gray-500'>
        <span>{data?.id}</span>
        {
          group !== 'user' &&
          <div className='relative w-10 h-10 '>
            <img className='rounded-full' src={`https://ui-avatars.com/api/?name=${user?.name}`} alt='user-profile' />
            <BiSolidCircle className={`absolute left-7 bottom-0 ${user?.available ? 'text-green-500' : 'text-gray-300'}`} />
          </div>
        }

      </div>
      <div className='flex items-center gap-2'>
        {group !== 'status' && getStatusIcon(data?.status)}
        <h3 className='text-lg font-bold tracking-tight text-gray-900 mb-2 h-14 overflow-hidden'>{data?.title}</h3>
      </div>
      <div className='flex gap-1'>
        {group !== 'priority' && getPriorityIcon(data?.priority)}
        <div className='border text-sm px-1 border-gray-200 flex gap-1 items-center rounded'>
          <BiSolidCircle className='text-gray-300' />
          <span className='text-gray-500'>{data?.tag}</span>
        </div>
      </div>
    </div>
  )
}

export default Card