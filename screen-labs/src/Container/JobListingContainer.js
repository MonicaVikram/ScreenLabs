import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import {JobListingComponent} from '../Components/JobListingComponent'
import {calllogout, getJobListing, deleteJob} from '../actions'
import FormAlert from '../Components/FormAlert'


function JobListingContainer({calllogout, getJobListing, joblisting_reducer, deleteJob}){
    const history = useHistory()

    const setlogout = ()=> {
        history.push('/')
        calllogout()
    }

    const createNewJob = () => {
        history.push('/createnew')
    }

    useEffect(()=>{
        getJobListing()
    },[getJobListing, joblisting_reducer.deleteSuccess])

    return (
        <>
            {joblisting_reducer.deleteSuccess &&
                <FormAlert color={'info'} msg={joblisting_reducer.deleteSuccess} />
            }
            {joblisting_reducer.deleteFailure &&
                <FormAlert color={'danger'} msg={joblisting_reducer.deleteFailure} />
            }
        <JobListingComponent
                calllogout = {setlogout}
                joblisting_reducer = {joblisting_reducer}
                createNewJob = {createNewJob}
                deleteJob = {deleteJob}
        />
       </>
    )
}

const mapStateToProps = (state) => {
    return {
        joblisting_reducer : state.joblisting_reducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        calllogout : () => dispatch(calllogout()),
        getJobListing : () => dispatch(getJobListing()),
        deleteJob : (id) => dispatch(deleteJob(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (JobListingContainer)