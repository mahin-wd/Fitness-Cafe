import React from 'react';
import './Calculation.css'
const Calculation = (props) => {
    const {time} = props;
    const {breakTimes} = props;

    let totalTime = 0;
    for (const times of time){
        totalTime = totalTime + times.time;
    }


    let totalBreak = 0;
    for (const breakTime in breakTimes) {
        // console.log(breakTime);
        totalBreak = totalBreak + breakTime;
    }

    // let totalBreak = 0;
    // for (const addBreaks of addBreak){
    //     totalBreak = totalBreak + addBreaks.break
    // }
    return (
        <div className='calc'>
            <div className="user-profile">
                
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
                {
                    breakTimes.map(breakTime => <button onClick={() => {props.addBreak(props.exercise)}}>{breakTime.break}s</button>)
                }
                
            </div>

            <h3>Exercise Detail</h3>
            <div className='exercise-detail'>
                <h4>Exercise Time: {totalTime}s</h4>
                <h4>Break Time: {0}s</h4>
            </div>
            <button className='activity-finished'>Activity Completed</button>
        </div>
    );
};

export default Calculation;