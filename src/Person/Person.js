import React, { Component } from 'react';
import classes from './Person.css';
import AuthContext from '../context/auth-context';

/** To be able to use the lifecycle hooks in person component, we'll first chnage this to a class component */

class Person extends Component {

    /** This is a more elegant way of using Context API as in here, we can access the context data from anywhere, in our app.
     * However, we can use this way only in class Component.
     */
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
        console.log(this.context.login);
    };

    render() {
        console.log('[Person.js] render');
        return (
            <div className={classes.Person}>

                { this.context.authenticated ? <p>User is Authenticated</p> : <p>User isn't Authenticated</p>}

                <p onClick={this.props.deletePersonHandler}>My name is {this.props.name} </p>
                <p>My age is {this.props.age} </p>
                <p> {this.props.children} </p>
                <input onChange={this.props.nameChangeHandler}
                    value={this.props.name} type='text'
                    ref={this.inputElementRef} >
                </input>
            </div>
        );
    };

};

export default Person;



