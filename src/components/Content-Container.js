import React from 'react';
import { Component } from 'react';
import Pug from './Pug.js';
import Home from './Home.js'
import Bulldog from './Bulldog.js'
import css from '../css/main.less';

export default class ContentContainer extends Component {
  render() {
    let content = null;
    if(this.props.type == 'pugs'){
      content = <Pug />;
    } else if(this.props.type == 'home'){
      content = <Home />;
    } else if(this.props.type == 'bulldogs'){
      content = <Bulldog />
    }
    return (
      <div className="container">
        {content}
      </div>
    );
  }
}
