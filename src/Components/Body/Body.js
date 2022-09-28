import React, { useEffect, useState } from 'react';
import Calculation from '../../Calculation/Calculation';
import Exercise from '../Exercise/Exercise';
import Head from '../Head/Head';
import './Body.css'

const Body = () => {
    const [exercises, setExercises] = useState([]);
    const [time, setTime] = useState([]);

    useEffect( () => {
        fetch('exercise.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    }, [])

    const addTime = (exercises) =>{
        // console.log(exercises.time)
        const netTime = [...time, exercises];
        setTime(netTime);
        // console.log(time);
        
    }

    return (
        <div className='body'>
            <Head></Head>
            <div className='main-body'>
                <div className="exercises">
                    {
                        exercises.map(exercise => <Exercise 
                                                        key={exercise.id}
                                                        exercise={exercise}
                                                        addTime={addTime}
                                                        ></Exercise>)
                    }
                </div>

                <div className="count-exercise">
                    <Calculation time={time}></Calculation>
                </div>
            </div>
        </div>
    );
};

export default Body;