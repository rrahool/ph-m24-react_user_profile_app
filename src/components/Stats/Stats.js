import React from 'react';

const Stats = (props) => {
    const stat = props.stat;
    // console.log(stat);
    

    let total = 0;
    for (let i = 0; i < stat.length; i++) {
        const user = stat[i];
        
        total = total + user.salary;

    }


    return (
        <div>
            <h2>Statistics</h2>
            <p>Total Friends: {stat.length}</p>
            <p>Total Salary: ${total}</p>
        </div>
    );
};

export default Stats;