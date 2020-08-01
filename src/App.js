import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Shashank', age: 23 },
      { name: 'Biplav', age: 23 },
    ],
    otherState: 'Some other value',
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    // console.log('Was Clicked');
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: 'B', age: 22 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Shashank', age: 23 },
        { name: event.target.value, age: 22 },
      ],
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      //inline styling using js objects
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };
    let persons = null;

  if (this.state.showPersons) {
    persons = (
      <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.switchNameHandler.bind(this, 'SHANK!!!!')} //passed method to props
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              changed={this.nameChangedHandler}
            />
          </div>
    );
  }
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch visibility
        </button>
         {persons}
      </div>
    );
  }
}

export default App;
