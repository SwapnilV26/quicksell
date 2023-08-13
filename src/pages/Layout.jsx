import React, { useContext } from 'react'
import Board from '../components/Board'
import { BoardContext } from '../context/BoardContext';

const Layout = () => {
    const {status} = useContext(BoardContext);

    return (
        <div className='mx-10 pt-5'>
            <div className='flex gap-7'>
                {status && status.map((s)=>{
                    return  <Board name={s.name} />
                })}
            </div>
        </div>
    )
}

export default Layout