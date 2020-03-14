import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faUserFriends, faPlusCircle, faPhoneAlt, faPaperPlane, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'
import './User.css';

const User = (props) => {
    console.log(props);

    const { img, name, email, phone, salary } = props.users;
    const [btnInfo, setBtnInfo] = useState({btnText: "Respond as Friend", disable: false, icon: faPlusCircle, btnClass: "btn-respond-friend"})

    function btnHandler(){
        props.handleAddUser(props.users) ;
        btnInfo.btnText = "Friend Added" 
        btnInfo.disable = true 
        btnInfo.icon = faUserFriends
        btnInfo.btnClass = "btn-added-friend"
        
    }

    return (
        <div className="user">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h1 className="user-name"><FontAwesomeIcon icon={faUserCircle} /> {name}</h1>
                <p><FontAwesomeIcon icon={faPaperPlane} /> {email}</p>
                <p><FontAwesomeIcon icon={faPhoneAlt} /> {phone}</p>
                <p><FontAwesomeIcon icon={faMoneyBillAlt} /> ${salary}</p>
                <button 
                    className = {btnInfo.btnClass} 
                    disabled={btnInfo.disable} 
                    onClick={btnHandler}
                >
                    <FontAwesomeIcon icon={btnInfo.icon} /> {btnInfo.btnText}
                </button>

            </div>

        </div>
    );
};

export default User;