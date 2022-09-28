import React from 'react';
import './image/user.jpg'
import './Calculation.css'
const Calculation = (props) => {
    const {time} = props;
    // console.log(times)

    let totalTime = 0;
    for (const times of time){
        totalTime = totalTime + times.time;
    }
    return (
        <div className='calc'>
            <div className="user-profile">
                <img src="image/user.jpg" alt="" />
                <h3>Mahin</h3>
            </div>

            <div className="user-info">
                <div>
                    <h2>65 KG</h2>
                    <h3>Weight</h3>
                </div>
                <div>
                    <h2>5.5 inch</h2>
                    <h3>Height</h3>
                </div>
                <div>
                    <h2>20</h2>
                    <h3>Age</h3>
                </div>
            </div>


            <h2>Add a break</h2>

            <div className="add-break">
                <button>10s</button>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
                <button>50s</button>
            </div>

            <h3>Exercise Detail</h3>
            <div className='exercise-detail'>
                <h4>Exercise Time: {totalTime}s</h4>
                <h4>Break Tike: {}</h4>
            </div>
            <button className='activity-finished'>Activity Completed</button>
        </div>
    );
};

export default Calculation;