import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import NavBar from './components/NavBar'
import Header from './components/Header'
import './App.css';

class App extends Component {

  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, {name}) => {
    this.setState({activeItem: name})
  }

  render() {

    return (
      <div className="App">
        <Header />
        <NavBar
        activeItem={this.state.activeItem}
        handleItemClick={this.handleItemClick}
        />
      </div>
    )
  }
}

export default App;
