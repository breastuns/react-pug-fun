import React from 'react';
import NavBarItem from './NavBarItem';
import css from '../css/NavBar.less';

export default class NavBar extends React.Component {
  render() {
    return (
      <ul>
        <img className="navbar-logo" src="../assets/doge-logo.jpg"/>
        {this.props.dogs.map((dog) =>
          <div key={dog} className="nav-space">
            <NavBarItem name={dog} handleClick={this.props.handleClick}/>
          </div>
        )}
      </ul>
    );
  }
}