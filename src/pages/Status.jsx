import React from 'react'
import Board from '../components/Board'

const Status = (props) => {
    
    return (
        <div className='mx-10 pt-5'>
            <div className='flex gap-5'>
                <Board tickets={props} type={"Todo"} />
                <Board />
                <Board />
                <Board />
                <Board />
            </div>
        </div>
    )
}

export default Status