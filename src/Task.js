import React from 'react';
import './custom.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

class Task extends React.Component{
  constructor(){
    super();
    this.state = {
      todos:null
    }
  }

  componentDidMount(){
    fetch("https://reqres.in/api/users").then((resp)=>{
      resp.json().then((result)=> {
        console.warn(result);
        this.setState({todos:result.data})
      })
    })
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
         <div className="task-data">
        {
          this.state.todos ?
          this.state.todos.map((item, i)=> 
        <div className="table">
          <div>{item.id}</div>
          <div>{item.first_name}</div>
          <div>{item.last_name}</div>
          <div>
            <button>Delete</button>
          </div>
          </div>
          ) 
          :
          null
        }
      </div>
      </div>
    );
  }
}


export default Task;











































// import React from 'react';
// import './App.css';

// class Task extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       users: null
//     }
//   }

//   componentDidMount(){
//     fetch('https://reqres.in/api/users').then((resp)=>{
//       resp.json().then((result)=> {
//         console.warn(result);
//         this.setState({users:result.data})
//       })
//     })
//   }
//   render(){
//     return(
//       <div className="App">
//         <h1> 
//           Fetch API Data
//         </h1>

//         {
//           this.state.users ?
//           this.state.users.map((item, i)=>
//         <div><p>{i}&nbsp;{item.first_name}&nbsp;{item.last_name}</p></div>
//           ) 
//           :
//           null
//         }
//       </div>
//     );
//   }
// }

// export default Task;