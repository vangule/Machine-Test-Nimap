import React from 'react';
import './custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Navbar from './Navbar';

class User extends React.Component{
  
  state = {
    fields: {}
  }
  

  onSubmit = (fields) => {
    this.setState({fields: fields})
  }

  render(){
    return(
      <div className="containers">
      <div className="header">
        <div className="dots"></div>
        <div className="dots"></div>
        <div className="dots"></div>  
        <div className="title"> Machine Test-Nimap</div> 
      </div>
      <Navbar/>
      <div className="log-box">
      <Login onSubmit={this.onSubmit} />
      </div>
      </div>
    );
  }
}

export default User;