import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { TbCircleDotted } from 'react-icons/tb'
import { BsCircle, BsCheckCircleFill, BsFillXCircleFill, BsExclamationSquareFill, BsThreeDots } from 'react-icons/bs'
import { FaCircleHalfStroke } from 'react-icons/fa6'
import { MdOutlineSignalCellularAlt, MdOutlineSignalCellularAlt1Bar, MdOutlineSignalCellularAlt2Bar } from 'react-icons/md'

export const BoardContext = createContext();

export const BoardContextProvider = ({ children }) => {

    const status = [
        {
            name: "Backlog",
            icon: <TbCircleDotted className="text-gray-500" />
        },
        {
            name: "Todo",
            icon: <BsCircle className="text-gray-400" />
        },
        {
            name: "In progress",
            icon: <FaCircleHalfStroke className="text-orange-400 rotate-180" />
        },
        {
            name: "Done",
            icon: <BsCheckCircleFill className="text-blue-500" />
        },
        {
            name: "Canceled",
            icon: <BsFillXCircleFill className="text-gray-400" />
        },
    ]

    const priority = [
        {
            id: 0, name: "No priority",
            icon: <BsThreeDots className="text-gray-400" />
        },
        {
            id: 4, name: "Urgent",
            icon: <BsExclamationSquareFill className="text-orange-500" />
        },
        {
            id: 3, name: "High",
            icon: <MdOutlineSignalCellularAlt className="text-gray-700" />
        },
        {
            id: 2, name: "Medium",
            icon: <div>
                <MdOutlineSignalCellularAlt className="text-gray-300 absolute" />
                <MdOutlineSignalCellularAlt2Bar className="text-gray-700 relative" />
            </div>

        },
        {
            id: 1, name: "Low",
            icon: <div>
                <MdOutlineSignalCellularAlt className="text-gray-300 absolute" />
                <MdOutlineSignalCellularAlt1Bar className="text-gray-700 relative" />
            </div>
        },
    ]

    const [group, setGroup] = useState(localStorage.getItem('groupBy') || "status");
    const [order, setOrder] = useState(localStorage.getItem('orderBy') || "priority");

    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);

    const baseURL = "https://apimocha.com/quicksell/data";

    const fetchData = () => {
        axios.get(baseURL).then((response) => {
            setTickets(response.data.tickets);
            setUsers(response.data.users);
        });
    }

    useEffect(() => {
        fetchData();
    }, [baseURL])


    return (
        <BoardContext.Provider value={{ tickets, users, status, priority, group, setGroup, order, setOrder }}>
            {children}
        </BoardContext.Provider>
    );
};