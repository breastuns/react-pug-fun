import React from 'react';
import {Component} from 'react';
import NavBar from './NavBar';
import ContentContainer from './Content-Container';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navState: 'home'
    };
  }

  render() {
    const handleClick = (dogName) => {
      let newState = {};
      newState.navState = dogName.toLowerCase();

      this.setState(newState);
    };

    return (
      <div>
        <NavBar
          dogs={['Home', 'Pugs', 'Bulldogs']}
          handleClick={handleClick}
        />
        <ContentContainer type={this.state.navState}/>
      </div>
    );
  }
}
