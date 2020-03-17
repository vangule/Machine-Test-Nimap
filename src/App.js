import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Task from './Task';
import User from './User';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
     <Switch>
     <Route path="/" exact component= {Home} />
     <Route path="/task" component= {Task} />
     <Route path="/user" component= {User} />
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
