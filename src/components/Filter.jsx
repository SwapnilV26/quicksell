import React, { useContext } from 'react'
// import { FilterContext } from '../context/FilterContext';
import { BoardContext } from '../context/BoardContext';

export const Filter = () => {

    const { group, setGroup, order, setOrder } = useContext(BoardContext);

    return (
        <div className='bg-gray-50 w-72 ml-10 z-10 rounded-lg p-5 absolute -mt-2 border border-gray-200 shadow-md'>
            <div className='flex justify-between'>
                <span className='text-gray-400 font-medium'>Grouping</span>
                <select id="small" value={group}
                    onChange={(e) => {
                        localStorage.setItem("groupBy", e.target.value);
                        setGroup(e.target.value)
                    }}
                    className="p-1 pr-5 text-sm font-medium cursor-pointer text-gray-900 border border-gray-300 rounded-md bg-white"
                >
                    <option defaultValue value="status">Status</option>
                    <option value="user">User</option>
                    <option value="priority">Priority</option>
                </select>
            </div>

            <div className='flex justify-between mt-2'>
                <span className='text-gray-400 font-medium'>Ordering</span>
                <select id="small" value={order}
                    onChange={(e) => {
                        localStorage.setItem("orderBy", e.target.value);
                        setOrder(e.target.value)
                    }}
                    className="p-1 pr-5 text-sm font-medium cursor-pointer text-gray-900 border border-gray-300 rounded-md bg-white"
                >
                    <option value="title">Title</option>
                    <option defaultValue value="priority">Priority</option>
                </select>
            </div>
        </div>
    )
}
