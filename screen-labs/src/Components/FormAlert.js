import React,{useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { Alert } from 'reactstrap'

import { userActionMsg } from '../actions'

function FormAlert({color, msg, userActionMsg}) {
  const [visible, setVisible] = useState(true)
  const onHideAlert = ()=>{
    visible && setVisible(false)
    userActionMsg()
  }
  useEffect(() => {
    setTimeout(() => onHideAlert(), 2000)
  }, [visible])

  return (
    msg ?
      <Alert isOpen={visible} color={color}>
        {msg}
      </Alert> :
      null
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    userActionMsg: () => dispatch(userActionMsg())
  }
}

export default connect(null,mapDispatchToProps)(FormAlert)