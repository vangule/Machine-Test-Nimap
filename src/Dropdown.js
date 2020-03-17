import React from 'react';
import './custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Dropdown extends React.Component{
  constructor(props){
    super();
    this.state = {
      tech: 'select'
    };
  }
  handleChange(e){
    this.setState({
      tech: e.target.value
    })
  }
  render(){
    return( 
      <>

       <div className="dropbox">
        <select onChange={this.handleChange.bind(this)} value={this.state.tech}>
          <option value="">Select a technology</option>
          <option value="">Angular</option>
          <option value="">React</option>
          <option value="">PHP</option>
          <option value="">Javascript</option>
        </select>
        </div>
      </>
    );
  }
}

export default Dropdown;