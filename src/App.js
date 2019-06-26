import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import { Route } from 'react-router-dom';
import Inbox from './Components/Inbox/Inbox';
import Outbox from './Components/Outbox/Outbox';
import User from './Components/User/User';

const  App=()=> {
  return (
    <div className="App">
      <Navbar>
   
      <Route path='/signup'  component={Inbox} />
        <Route path='/signin' component={Outbox} />
        <Route path='/UserHome' component={User} />
        </Navbar>
    </div>
  );
}

export default App;
