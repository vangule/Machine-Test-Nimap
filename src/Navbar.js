import React from 'react';
import './custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';


class Navbar extends React.Component{
  render(){
    return(
        <div className="menustyle">
          <ul>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/task">Task</Link></li>
            <li> <Link to="/user">User</Link></li>
          </ul>
        </div>
    );
  }
}

export default Navbar;