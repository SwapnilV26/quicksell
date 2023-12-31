import React, { useContext } from 'react'
import Board from '../components/Board'
import { BoardContext } from '../context/BoardContext';

const Layout = () => {
    const { group, status, priority, users } = useContext(BoardContext);

    return (
        <div className='mx-10 pt-5'>
            {
                group === "status" &&
                <div className='grid grid-cols-1 md:grid-cols-2 lg:flex gap-7'>
                    {status && status.map((item) => {
                        return <Board key={item.id} factor={item.name} name={item.name} />
                    })}
                </div>
            }
            {
                group === "priority" &&
                <div className='grid grid-cols-1 md:grid-cols-2 lg:flex gap-7'>
                    {priority && priority.map((item) => {
                        return <Board key={item.id} factor={item.id} name={item.name} />
                    })}
                </div>
            }
            {
                group === "user" &&
                <div className='grid grid-cols-1 md:grid-cols-2 lg:flex gap-7'>
                    {users && users.map((item) => {
                        return <Board key={item.id} factor={item.id} name={item.name} available={item.available} />
                    })}
                </div>
            }
        </div>
    )
}

export default Layout