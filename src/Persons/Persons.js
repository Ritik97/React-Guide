import React, { Component } from 'react';
import Person from '../Person/Person'

class Persons extends Component {

    constructor(props) {
        super(props);
        console.log('[Persons.js] Constructor');
    };

    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps', props);
        return state;
    };

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        if(nextProps.persons !== this.props.persons) {
            return true;
        } else {
            return false;
        }
        
    };

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot' }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate', snapshot);
    };

    render() {
        console.log('[Persons.js] render');
        return (
            <div>
                {
                    this.props.persons.map((person, index) => {
                        return <Person key={person.id} name={person.name} age={person.age}
                            deletePersonHandler={() => this.props.deletePersonHandler(index)}
                            nameChangeHandler={(event) => this.props.nameChangeHandler(event, person.id)} />
                    })
                }
            </div>
        );
    };

};


export default Persons;