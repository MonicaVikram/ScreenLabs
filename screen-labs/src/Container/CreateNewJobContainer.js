import React from 'react'
import { connect } from 'react-redux'
import CreateNewJobComponent from '../Components/CreateNewJobComponent'
import { saveNewJob } from '../actions'
import FormAlert from '../Components/FormAlert'
import { useHistory } from 'react-router-dom'

function CreateNewJobContainer({saveNewJob, joblisting_reducer}) {

const history = useHistory()

const navigateToListingScreen = () => {
    history.push('/job-listing')
}

    return (
        <>
            {joblisting_reducer.saveJobSuccess &&
				<FormAlert color={'info'} msg={joblisting_reducer.saveJobSuccess} />
			}
			{joblisting_reducer.saveJobFailure &&
				<FormAlert color={'danger'} msg={joblisting_reducer.saveJobFailure} />
			}
            <CreateNewJobComponent 
                saveNewJob ={saveNewJob}
                joblisting_reducer = {joblisting_reducer}
                navigateToListingScreen = {navigateToListingScreen}
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
        saveNewJob : (val) => dispatch(saveNewJob(val))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CreateNewJobContainer)