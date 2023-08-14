import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const BoardContext = createContext();

export const BoardContextProvider = ({ children }) => {

    const status = [
        { name: "Backlog" }, 
        { name: "Todo" }, 
        { name: "In progress" }, 
        { name: "Done" }, 
        { name: "Canceled" }, 
    ]

    const priority = [
        { id: 0, name: "No priority" }, 
        { id: 4, name: "Urgent" }, 
        { id: 3, name: "High" }, 
        { id: 2, name: "Medium" }, 
        { id: 1, name: "Low" },     
    ]
    
    const [group, setGroup] = useState("status");
    const [order, setOrder] = useState("priority");

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