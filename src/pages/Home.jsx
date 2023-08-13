import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Layout from './Layout'

const Home = () => {
    
    return (
        <div>
            <Header />
            <div className='bg-gray-100'>
                <Layout />
            </div>
        </div>
    )
}

export default Home