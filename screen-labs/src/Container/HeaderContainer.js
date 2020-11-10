import React from 'react'
import { connect } from 'react-redux'
import { calllogout } from '../actions'
import { useHistory } from 'react-router-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom'
import JobListingContainer from './JobListingContainer'
import CreateNewJobContainer from './CreateNewJobContainer'
import UpdateJobContainer from './UpdateJobContainer'

function HeaderContainer({calllogout}) {

const history = useHistory()

const setlogout = ()=> {
    history.push('/')
    calllogout()
}
    return (
        <>
        <div className="header">
            <div onClick={()=>{setlogout()}}>Logout</div>
        </div>
        <Router>
            <Switch>
                <Route exact path="/job-listing">
                    <JobListingContainer />
                </Route>
                <Route exact path="/createnew">
                    <CreateNewJobContainer />
                </Route>
                <Route path="/updatejob/:jobId">
                    <UpdateJobContainer />
                </Route>
            </Switch>
        </Router>
        </>
    )
}

const mapStateToProps = () => {

} 

const mapDispatchToProps = (dispatch) => {
    return {
        calllogout : (val) => dispatch(calllogout(val))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (HeaderContainer)