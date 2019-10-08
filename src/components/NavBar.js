import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'

class NavBar extends Component {

  render() {
    return (
      <Menu pointing vertical>
        <Menu.Item
          name='home'
          active={this.props.activeItem === "home" ? this.props.activeItem : null}
          onClick={this.props.handleItemClick}
        />
        <Menu.Item
          name='messages'
          active={this.props.activeItem === "messages" ? this.props.activeItem : null}
          onClick={this.props.handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={this.props.activeItem === "friends" ? this.props.activeItem : null}
          onClick={this.props.handleItemClick}
        />
      </Menu>
    )
  }
}

export default NavBar;
