import React, { useEffect, useState } from 'react';
import Calculation from '../Calculation/Calculation';
import Exercise from '../Exercise/Exercise';
import Head from '../Head/Head';
import './Body.css'

const Body = () => {
    const [exercises, setExercises] = useState([]);
    const [time, setTime] = useState([]);
    const [breakTimes, setBreakTimes] = useState([]);
    const [takeBreak, setTakeBreak] = useState([])

    useEffect( () => {
        fetch('exercise.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    }, [])

    useEffect( () => {
        fetch('break.json')
        .then(res => res.json())
        .then(data => setBreakTimes(data));
    }, [])

    const addTime = (exercises) => {

        const newTime = [...time, exercises];
        setTime(newTime);
        
    }

    const addBreak = () => {
        breakTimes.map(breakTime => setTakeBreak(breakTime))
        console.log(takeBreak);
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
                    <div className='question'>
                        <h2> 1) How does react work?</h2>
                        <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                    </div>
                </div>

                <div className="count-exercise">
                    <Calculation time={time}
                                breakTimes={breakTimes}
                                addBreak={addBreak} ></Calculation>
                </div>
            </div>
        </div>
    );
};

export default Body;