import React from 'react';
import NavBarItem from './NavBarItem';
import css from '../css/NavBar.less';

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        {this.props.dogs.map((dog) =>
          <div key={dog}>
            <NavBarItem name={dog} handleClick={this.props.handleClick}/>
          </div>
        )}
      </div>
    );
  }
}