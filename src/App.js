import React, { Component } from 'react';
import classes from './App.css';
import Persons from './Persons/Persons';


class App extends Component {

  state = {
    Persons: [
      { id: 0, name: 'Ritik', age: 23 },
      { id: 1, name: 'Rohit', age: 22 },
      { id: 2, name: 'Dino', age: 24 }
    ],
    otherState: 'Other State',
    showPersons: true
  };

  switchNameHandler = (newName) => {
    console.log('Button Testing');
    this.setState({
      Persons: [
        { name: newName, age: 33 },
        { name: 'Ronit', age: 42 },
        { name: 'Harsh', age: 34 }
      ]
    });
  };

  nameChangeHandler = (event, id) => {
    console.log('Button Testing');
    const personIndex = this.state.Persons.findIndex(person => person.id === id);
    const personObj = { ...this.state.Persons[personIndex] };
    personObj.name = event.target.value;
    const persons = [...this.state.Persons];
    persons[personIndex] = personObj;
    this.setState({
      Persons: persons
    });
  };



  deletePersonHandler = (personIndex) => {
    console.log('delete');
    /*const persons = this.state.Persons;  Here, we are mutating the original state which is not a good practice. 
      So, will create a copy of Persons array using .slice()
    */
    const persons = this.state.Persons.slice();
    persons.splice(personIndex, 1)
    this.setState({
      Persons: persons
    })

  };

  togglePersonHandler = () => {
    console.log('toggle');
    let doesToggle = this.state.showPersons;
    this.setState({
      showPersons: !doesToggle
    });
  };

  render() {
    /**Inline Style */
    const btnClasses = [classes.Button];

    let persons = null;


    if (this.state.showPersons) {

      persons = <Persons persons = { this.state.Persons } deletePersonHandler = { this.deletePersonHandler } 
      nameChangeHandler = { this.nameChangeHandler }/>
    

      btnClasses.push(classes.Green)
     
    }

    const assignedClasses = [];
    if(this.state.Persons.length <= 2) {
      assignedClasses.push(classes.Red);
    }  
    if(this.state.Persons.length <= 1) {
      assignedClasses.push(classes.Bold);
    }

    return (
      <div className={classes.App}>
        <h1>I am a React App</h1>
        <h2 className = { assignedClasses.join(' ') }> This is a Person Component </h2>
        <button className = { btnClasses.join(' ') } onClick = { this.togglePersonHandler }> Toggle Person </button>
        {persons}
      </div> 
    );
  };
};


export default App;
