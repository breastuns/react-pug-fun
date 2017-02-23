import React from 'react';
import NavBarItem from './NavBarItem';

export default class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar">
                {this.props.dogs.map((dog) => <NavBarItem name={dog}/>)}
            </div>
        );
    }
}