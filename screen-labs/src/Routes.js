import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom'

import LoginContainer from './Container/LoginContainer'
import HeaderContainer from './Container/HeaderContainer'

function Routes() {
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <LoginContainer />
                </Route>
                <HeaderContainer />
            </Switch>
        </Router>
    )
}

export default Routes