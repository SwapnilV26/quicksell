import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import Status from './Status'
import axios from 'axios'

const Home = () => {
    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);

    const baseURL = "https://apimocha.com/quicksell/data";

    const fetchData = () => {
        axios.get(baseURL).then((response) => {
            setTickets(response.data.tickets);
            setUsers(response.data.users);
        });
    }

    useEffect(()=>{
        fetchData();
    },[baseURL])

    // console.log("tick", tickets)
    // console.log("u", users)

    return (
        <div>
            <Header />
            <div className='bg-gray-100 h-screen'>
                <Status tickets={tickets} />
            </div>
        </div>
    )
}

export default Home