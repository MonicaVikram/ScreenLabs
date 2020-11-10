import { combineReducers } from 'redux'
import { withReduxStateSync } from 'redux-state-sync'
import { joblisting_reducer } from './joblisting_reducer'

const rootReducer = combineReducers({
    joblisting_reducer
})

export default withReduxStateSync(rootReducer)
