import React from 'react';
import './custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from './Dropdown';
import Information from './Information';
import Navbar from './Navbar';

class Home extends React.Component{
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
        <Dropdown/>
        <Information/>
      </div>
    );
  }
}

export default Home;