import React from "react"
import "./App.scss"

import AccountList from "./containers/account-list/AccountList"
import Login from "./containers/login/Login"
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"
import Otp from "./containers/otp/Otp"

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Login />
        </Route>
        <Route path='/users'>
          <AccountList />
        </Route>
        <Route path='/otp'>
          <Otp />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
