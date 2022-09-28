import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const {name, img, time, text, age} = props.exercise; 
    return (
        <div className='card'>
            <div>
                <img src={img} alt="" />
                <h2>{name}</h2>
                <h3>{text}</h3>
                <p>{age}</p>
                <p>Time: {time}</p>
                <button>Add to list</button>
            </div>
        </div>
    );
};

export default Exercise;