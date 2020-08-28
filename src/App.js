import React from "react"
import "./App.scss"

import AccountList from "./containers/account-list/AccountList"
import Login from "./containers/login/Login"
import { Switch, Route, HashRouter as Router } from "react-router-dom"
import Otp from "./containers/otp/Otp"
import { ToastProvider } from "react-toast-notifications"

function App() {
  return (
    <ToastProvider autoDismissTimeout={1000}>
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
    </ToastProvider>
  )
}

export default App
