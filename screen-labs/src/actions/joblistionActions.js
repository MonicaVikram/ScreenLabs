import { 
    SET_LOGIN_TYPE, 
    LOGOUT,
    JOB_LISTING_SUCCESS,
    JOB_LISTING_FAILURE,
    SAVE_JOB_SUCCESS,
    SAVE_JOB_FAILURE,
    UPDATE_ACTION_MSG,
    GET_JOBBYID_SUCCESS,
    GET_JOBBYID_FAILURE,
    UPDATE_JOB_SUCCESS,
    UPDATE_JOB_FAILURE,
    DELETE_JOB_SUCCESS,
    DELETE_JOB_FAILURE,
    APPLY_JOB_SUCCESS,
    APPLY_JOB_FAILURE
} from '../Contants/action_types'
import api from '../middleware/api'
import { login_type } from '../Contants/local_storage'

export function setLoginType(payload) {
    return (dispatch) => {
        localStorage.setItem(login_type, payload)
        dispatch(loginType(payload))
      }
}

export function calllogout () {
    return (dispatch) => {
        dispatch(logout())
    }
}

export function getJobListing () {
    return(dispatch, state) => {
        api.fetchAuthGet('/jobs')
        .then(({ data }) => {
          dispatch(JobListingSuccess(data))
        })
        .catch((error) => {
          dispatch(JobListingFailure(error.response ? error.response.data : 'error'))
        })
      return Promise.resolve()
    }
}

export function saveNewJob (payload) {
    return(dispatch, state) => {
        api.fetchPost('/jobs/add', payload)
        .then(({ data }) => {
          dispatch(saveNewJobSuccess(data))
        })
        .catch((error) => {
          dispatch(saveNewJobFailure(error.response ? error.response.data : 'error'))
        })
      return Promise.resolve()
    }
}

export function getJobbyId (payload) {
  return(dispatch, state) => {
      api.fetchAuthGet('/jobs/'+payload)
      .then(({ data }) => {
        dispatch(getJobbyIdSuccess(data))
      })
      .catch((error) => {
        dispatch(getJobbyIdFailure(error.response ? error.response.data : 'error'))
      })
    return Promise.resolve()
  }
}

export function deleteJob (id) {
    return(dispatch, state) => {
        api.fetchAuthDelete('/jobs/delete/'+id)
        .then(({ data }) => {
          dispatch(deleteJobSuccess(data))
        })
        .catch((error) => {
          dispatch(deleteJobFailure(error.response ? error.response.data : 'error'))
        })
      return Promise.resolve()
    }
}


export function updateJob (id, payload) {
  return(dispatch, state) => {
      api.fetchPut('/jobs/update/'+id, payload)
      .then(({ data }) => {
        dispatch(updateJobSuccess(data))
      })
      .catch((error) => {
        dispatch(updateJobFailure(error.response ? error.response.data : 'error'))
      })
    return Promise.resolve()
  }
}

// 

export function applyjob (job_id) {
  return(dispatch, state) => {
      api.fetchAuthGet(`​/jobs​/${job_id}​/apply`)
      .then(({ data }) => {
        dispatch(applyjobSuccess(data))
      })
      .catch((error) => {
        dispatch(applyjobFailure(error.response ? error.response.data : 'error'))
      })
    return Promise.resolve()
  }
}

export function userActionMsg(){
    return { type: UPDATE_ACTION_MSG }
}

function deleteJobSuccess (payload) {
  return { type : DELETE_JOB_SUCCESS, payload}
}

function applyjobSuccess (payload) {
  return { type : APPLY_JOB_SUCCESS, payload}
}

function applyjobFailure (payload) {
  return { type : APPLY_JOB_FAILURE, payload}
}

function deleteJobFailure (payload) {
  return { type : DELETE_JOB_FAILURE, payload}
}

function updateJobSuccess (payload) {
  return { type : UPDATE_JOB_SUCCESS, payload}
}

function updateJobFailure (payload) {
  return { type : UPDATE_JOB_FAILURE, payload}
}

function getJobbyIdSuccess (payload) {
  return { type : GET_JOBBYID_SUCCESS, payload}
}

function getJobbyIdFailure (payload) {
  return { type : GET_JOBBYID_FAILURE, payload}
}

function saveNewJobSuccess (payload) {
    return { type: SAVE_JOB_SUCCESS, payload}
}

function saveNewJobFailure (payload) {
    return { type: SAVE_JOB_FAILURE, payload}
}


function JobListingSuccess(payload){
    return { type: JOB_LISTING_SUCCESS, payload}
}

function JobListingFailure (payload) {
    return { type: JOB_LISTING_FAILURE, payload}
}

function loginType(payload){
    return { type: SET_LOGIN_TYPE, payload}
}

function logout(){
    return { type: LOGOUT}
}