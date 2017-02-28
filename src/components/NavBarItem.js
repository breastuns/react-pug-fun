import React from 'react';
import {Component} from 'react';

export default class NavBarItem extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <div>
        <div className="navbar-link" onClick={() => {handleClick(this.props.name)}} href={this.props.link}>{this.props.name}</div>
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