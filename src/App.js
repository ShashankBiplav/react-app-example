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
          {this.state.persons.map((person) => {
            return <Person name={person.name} age={person.age} />;
          })}
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
