import React from 'react'
import { connect } from 'react-redux'
import CreateJobComponent from '../Components/CreateNewJobComponent'
import { getJobbyId, updateJob, applyjob } from '../actions'
import {
    useParams
  } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import FormAlert from '../Components/FormAlert'

function UpdateJobContainer({getJobbyId, jobByIdSuccess, updateJob, joblisting_reducer, applyjob}){
    const { jobId } = useParams()
    const history = useHistory()

    const navigateToListingScreen = () => {
        history.push('/job-listing')
    }

    return(
        <>
            {joblisting_reducer.updateJobSuccess &&
                <FormAlert color={'info'} msg={joblisting_reducer.updateJobSuccess} />
            }
            {joblisting_reducer.updateJobFailure &&
                <FormAlert color={'danger'} msg={joblisting_reducer.updateJobFailure} />
            }
            <CreateJobComponent
            jobId = {jobId}
            getJobbyId = {getJobbyId}
            navigateToListingScreen = {navigateToListingScreen}
            jobByIdSuccess = {jobByIdSuccess}
            updateJob ={updateJob}
            joblisting_reducer = {joblisting_reducer}
            applyjob = {applyjob}
            />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        jobByIdSuccess : state.joblisting_reducer.jobByIdSuccess,
        joblisting_reducer : state.joblisting_reducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getJobbyId : (val) => dispatch(getJobbyId(val)),
        updateJob : (id, val) => dispatch(updateJob(id, val)),
        applyjob : (id) => dispatch(applyjob(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (UpdateJobContainer)