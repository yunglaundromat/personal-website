import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar'
import TitleCard from './components/TitleCard'
import AppContainer from './containers/AppContainer'
import './App.css';

class App extends Component {

  state = {
    activeItem: 'overview'
  }

  handleItemClick = (e, {name}) => {
    this.setState({activeItem: name})
  }

  render() {

    return (
      <div className="App">
        <TitleCard />
        <NavBar
        activeItem={this.state.activeItem}
        handleItemClick={this.handleItemClick}
        />
        <AppContainer activeItem={this.state.activeItem}/>
      </div>
    )
  }
}

export default App;
