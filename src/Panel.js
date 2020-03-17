import React from 'react';
import './custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

class Panel extends React.Component{
  render(){
    return(
      <div className="containers">
        <div className="header">
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>  
          <div className="title"> Machine Test-Nimap</div> 
        </div>
        <div className="menustyle">
          <ul>
          <li> <Link to="/">Home</Link></li>
          <li> <Link to="/task">Task</Link></li>
          <li> <Link to="/user">User</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Panel;