import React from 'react';
import './custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component{

  userData;

  constructor(props){
    super(props);
    this.initialState = {
      username : '',
      password : ''
    }

    this.state = this.initialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name] : value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState(this.initialState);
    console.log(this.state);
  }

  //React Life Cycle
componentDidMount(){
    this.userData = JSON.parse(localStorage.getItem('user'));

    if(localStorage.getItem('user')){
      this.setState({
        username : this.state.username,
        password : this.state.password
      })
    }else{
      this.setState({
        username: '',
        password: ''
      })
    }
}
componentWillUpdate(nextProps,nextState){
  localStorage.setItem('user',JSON.stringify(nextState));
}
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <div>Username: &nbsp;
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} required/>
        </div><br/>
        <div>Password: &nbsp;&nbsp;
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required/>
        </div><br/><br/><br/>
        <button className="logbtn" type="submit">Login</button>
      </form>
    );
  }
} 

export default Login;