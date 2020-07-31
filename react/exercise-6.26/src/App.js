import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
//pages
import LogIn from './views/login/login';
import SignUp from './views/register/register';
import HomePage from './views/home/homepage';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LogIn} />
          <Route path="/register" component={SignUp}/>
          <Route path="/homepage" component={HomePage}/>
        </Switch>
      
      </BrowserRouter>
    </div>
  )
}

export default App