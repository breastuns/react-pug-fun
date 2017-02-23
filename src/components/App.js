import React from 'react';
import { Component } from 'react';
import HelloWorld from './HelloWorld';
import NavBar from './NavBar';

export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar dogs={['pugs', 'bulldogs', 'french bulldogs']}/>
                <HelloWorld/>
                <HelloWorld/>
            </div>
        );
    }
}
