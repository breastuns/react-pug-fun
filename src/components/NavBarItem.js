import React from 'react';
import { Component } from 'react';

export default class NavBarItem extends Component {
    render() {
        return (
            <div>
                <a className="navbar-link">{this.props.name}</a>
            </div>
        );
    }
}

// export default function NavBarItem (props) {
//     return (
//         <div>
//             <a className="navbar-link">{`${props.name} this is the function component!`}</a>
//         </div>
//     );
// }