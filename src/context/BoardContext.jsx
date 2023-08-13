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
        <BoardContext.Provider value={ {tickets, users, status} }>
            {children}
        </BoardContext.Provider>
    );
};