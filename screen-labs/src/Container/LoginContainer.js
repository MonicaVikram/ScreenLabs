import React, { useState } from 'react'
import { Button, Label, Form, Input } from "reactstrap"
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import {setLoginType} from '../actions'
import '../App.scss';


function LoginContainer ({setLoginType}) {

    const history = useHistory()
    const { handleSubmit } = useForm()
    const [loginType, setloginType] = useState('Recruiter')
    const onSubmit = () => {
        setLoginType(loginType)
        history.push('/job-listing')
    }

    return (
        <div className="outer">
            <div className="inner">
                
                <h3>{loginType} Log in</h3>

                <Form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                        <Label>Email</Label>
                        <Input type="email" value={loginType === 'Recruiter' ? 'recruiter@screel.in' : 'candidate@screel.in'}
                            readOnly
                            className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <Label>Password</Label>
                        <Input type="password" readOnly value="test" className="form-control" placeholder="Enter password" />
                    </div>

                    <Button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</Button>

                </Form>

                <p className="forgot-password text-right">
                <a onClick={()=>{setloginType(loginType === 'Recruiter' ? 'Candidate' : 'Recruiter')}}>back to {loginType === 'Recruiter' ? 'Candidate' : 'Recruiter'} login</a>
                </p>
                
            </div>
        </div>
    )
}

const mapStateToProps = () => {

}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoginType : (val) => dispatch(setLoginType(val))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)