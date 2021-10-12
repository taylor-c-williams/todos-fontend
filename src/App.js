import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    NavLink,
    Redirect
} from 'react-router-dom';
import Home from './home.js';
import LogIn from './logIn.js';
import SignUp from './signUp.js';
import ToDo from './toDo.js';

import './App.css'

const TOKEN_KEY = 'TOKEN'

export default class App extends Component {

  state = {
    token: localStorage.getItem(TOKEN_KEY) || ''
  }

  handleTokenChange = token => {
    localStorage.setItem(TOKEN_KEY, token)
    this.setState({ token:token })
  }

  logout = () => {
    localStorage.clear()
    this.setState({ token:'' })
  }

    render() {
      console.log(this.state)
        return (
            <div>
                <Router>
                  <header>
                  <NavLink exact activeClassName="active" to='/'>Home</NavLink>
                  <NavLink exact activeClassName="active" to='/signup'>Sign Up</NavLink>
                  <NavLink exact activeClassName="active" to='/login'>Log In</NavLink>
                  <NavLink exact activeClassName="active" to='/todo'>Tasks</NavLink>
                  {this.state.token && <button onClick={this.logout}>Log Out</button>}
                  </header>

                  JENGINS 

                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <Home{...routerProps} />} 
                        />
                        <Route 
                            path="/login" 
                            exact
                            render={(routerProps) => <LogIn {...routerProps} />} 
                        />
                        <Route 
                          path="/signup" 
                          exact
                          render={(routerProps) => <SignUp 
                            handleTokenChange={this.handleTokenChange}
                            {...routerProps} />} 
                        />
                         <Route 
                          path="/todo" 
                          exact
                          render={(routerProps) => 
                          this.state.token ?
                          <ToDo token={this.state.token} {...routerProps} /> :
                          <Redirect to="/signup" />} />
                    </Switch>
                </Router>
            </div>
        )
    }
}