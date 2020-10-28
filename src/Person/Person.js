import React, {Component}  from 'react';
import classes from './Person.css';

/** To be able to use the lifecycle hooks in person component, we'll first chnage this to a class component */

class Person extends Component{

    render() {
        console.log('[Person.js] render');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.deletePersonHandler}>My name is {this.props.name} </p>
                <p>My age is {this.props.age} </p>
                <p> {this.props.children} </p>
                <input onChange={this.props.nameChangeHandler} value={this.props.name}></input>
            </div>
        );
    };

};

export default Person;



