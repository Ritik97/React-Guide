import React from 'react';
import classes from './Person.css';


const person = (props) => {

    return (
        <div className={classes.Person}>
            <p onClick={props.deletePersonHandler}>My name is {props.name} </p>
            <p>My age is {props.age} </p>
            <p> {props.children} </p>
            <input onChange={props.nameChangeHandler} value={props.name}></input>
        </div>
    );
};

export default person;



