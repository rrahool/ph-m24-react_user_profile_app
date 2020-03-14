import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './List.css'
import User from '../User/User';
import Stats from '../Stats/Stats';


const List = () => {

    const first15 = fakeData.slice(0, 15);
    const [users, setUsers] = useState(first15);
    const [stat, setStat] = useState([]);

    const handleAddUser = (user) => {
        // console.log('Friend Added', product);
        const newStat = [...stat, user];
        setStat(newStat);        
    }

    return (
        <div className="list-container">
            <div className="user-container">
                <ul>
                    {
                        users.map(
                            user => <User 
                                            users = {user}
                                            handleAddUser = {handleAddUser} 
                                        >
                                        </User>
                        )
                    }
                </ul>
            </div>
            <div className="cart-container">
                <Stats stat={stat}></Stats>
            </div>
        </div>
    );
};

export default List;