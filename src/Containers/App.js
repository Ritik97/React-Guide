import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Persons/Persons';
import Cockpit from '../Cockpit/Cockpit';


class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    /* can set state like this also
    this.setState = {
      Persons: [
        { id: 0, name: 'Ritik', age: 23 },
        { id: 1, name: 'Rohit', age: 22 },
        { id: 2, name: 'Dino', age: 24 }
      ],
      otherState: 'Other State',
      showPersons: true
    } */
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  };

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[App.js] getSnapshotBeforeUpdate');
    return null;
};

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  };

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  };

  state = {
    Persons: [
      { id: 0, name: 'Ritik', age: 23 },
      { id: 1, name: 'Rohit', age: 22 },
      { id: 2, name: 'Dino', age: 24 }
    ],
    otherState: 'Other State',
    showPersons: true,
    removeCockpit: true
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

  removeCockpit = () => {
    console.log('Cockpit Toggled');
    let cockpit = this.state.removeCockpit;
    this.setState({
      removeCockpit: !cockpit
    });
  };

  render() {
    /**Inline Style */
    console.log('[App.js] render');

    let persons = null;

    if (this.state.showPersons) {

      persons = <Persons persons={this.state.Persons} deletePersonHandler={this.deletePersonHandler}
        nameChangeHandler={this.nameChangeHandler} />

    }

    return (
      <div className={classes.App}>
        <button onClick={this.removeCockpit}>Toggle Cockpit</button>
        { this.state.removeCockpit ? (
        <Cockpit showPersons={this.state.showPersons} personsLength={this.state.Persons.length}
          togglePersonHandler={this.togglePersonHandler} title={this.props.title} /> ) : null 
        }
        {persons}
      </div>
    );
  };
};


export default App;
