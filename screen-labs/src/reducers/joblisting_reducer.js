
import { SET_LOGIN_TYPE, 
    LOGOUT, 
    JOB_LISTING_SUCCESS,
    JOB_LISTING_FAILURE,
    SAVE_JOB_FAILURE,
    SAVE_JOB_SUCCESS,
    UPDATE_ACTION_MSG,
    GET_JOBBYID_FAILURE,
    GET_JOBBYID_SUCCESS,
    UPDATE_JOB_FAILURE,
    UPDATE_JOB_SUCCESS,
    DELETE_JOB_SUCCESS,
    DELETE_JOB_FAILURE,
    
 } from '../Contants/action_types'
import {login_type} from '../Contants/local_storage' 
const initialState = {
    loginType : null,
    jobListing : [],
    jobListingFailure : null,
    saveJobSuccess : null,
    saveJobFailure : null,
    jobByIdSuccess : null,
    jobByIdFailure : null,
    updateJobSuccess : null,
    updateJobfailure : null,
    deleteSuccess : null,
    deleteFailure : null
}



export function joblisting_reducer(state={...initialState}, action){
    switch (action.type) {
        case SET_LOGIN_TYPE:
            return {
                ...state,
                loginType : action.payload
            }
        case LOGOUT:
            return {
                ...state, ...initialState
            }
        case JOB_LISTING_SUCCESS:
            return {
                ...state,
                jobListing : action.payload
            }
        case JOB_LISTING_FAILURE:
            return {
                ...state,
                jobListingFailure : {...action.payload}
            }
        case SAVE_JOB_SUCCESS:
            return {
                ...state,
                saveJobSuccess : 'Save Job Successfully!'
            }
        case SAVE_JOB_FAILURE:
            return {
                ...state,
                saveJobFailure : 'Save Job Failed!'
            }
        case GET_JOBBYID_SUCCESS:
            return {
                ...state,
                jobByIdSuccess : {...action.payload}
            }
        case GET_JOBBYID_FAILURE:
            return {
                ...state,
                jobByIdFailure : "Error in Fetching Job"
            }
        case UPDATE_JOB_SUCCESS:
            return {
                ...state,
                updateJobSuccess :  localStorage.getItem(login_type) === 'Recruiter' ? 'Job Updated Successfully!' : 'Job Applied Successfully!'
            }
        case UPDATE_JOB_FAILURE:
            return {
                ...state,
                updateJobSuccess : localStorage.getItem(login_type) === 'Recruiter' ? 'Job updated Failed!' : 'Job Applied Failed!'
            }
        case DELETE_JOB_SUCCESS:
            return {
                ...state,
                deleteSuccess : 'Job deleted Successfully'
            }
        case DELETE_JOB_FAILURE:
            return {
                ...state,
                deleteFailure : 'Job delete Failed !'
            }
        case UPDATE_ACTION_MSG:
            return {
                ...state,
                saveJobSuccess : null,
                saveJobFailure : null,
                updateJobSuccess : null,
                updateJobSuccess : null,
                deleteSuccess : null,
                deleteFailure : null
            }
    default:
        return state
    }
}