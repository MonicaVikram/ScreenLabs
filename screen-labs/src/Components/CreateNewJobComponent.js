import React, { useEffect } from 'react'
import { Form, Label, Input, Button } from 'reactstrap'
import { useForm } from 'react-hook-form'
import { login_type } from '../Contants/local_storage'

export default function CreateNewJobComponent ({saveNewJob, joblisting_reducer, navigateToListingScreen, jobId, getJobbyId, 
    jobByIdSuccess, updateJob, applyjob}) {

    const { handleSubmit, register, errors, reset } = useForm()

    const onSubmit = (data) => {
        if(localStorage.getItem(login_type) === 'Recruiter'){
            if(jobId)
                updateJob(jobId,data)
            else
                saveNewJob(data)
        }
        else {
            data.applied = true
            updateJob(jobId,data)
        }
        
    }
    
    useEffect(()=>{
        if(joblisting_reducer && (joblisting_reducer.saveJobSuccess || joblisting_reducer.saveJobFailure)){
            reset()
        }
    }, [joblisting_reducer])

    useEffect(()=>{
        if(jobId){
            getJobbyId(jobId)
        }
    },[jobId, joblisting_reducer.updateJobSuccess])

    useEffect(()=>{
        if(jobByIdSuccess){
            reset({
                ...jobByIdSuccess
            })
        }

    },[jobByIdSuccess])


    return (
        <>
        <a onClick={()=>{navigateToListingScreen()}}>back to listing page</a>
         <div className="outer">
            <div className="inner">
                { localStorage.getItem(login_type) === 'Recruiter' &&
                    <h3>{jobId ? 'Update ' : 'Create '}  New Job</h3>
                }
                {localStorage.getItem(login_type) !== 'Recruiter' &&
                    <h3>View Job</h3>
                }
                <Form  onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <Label>Title</Label>
                        <Input className="form-control" name="job_title" placeholder="Enter Title" 
                         innerRef={register ({
                            required : 'Title is required',
                            maxLength : 50,
                            validate: value => value.length > 50 ? 'Title exceeded maximium' : true
                          })}
                          disabled = { localStorage.getItem(login_type) !== 'Recruiter'}
                        />
                        {errors.job_title && <span className="error_txt">{errors.job_title.message}</span>}
                    </div>


                    <div className="form-group">
                        <Label>Description</Label>
                        <Input  className="form-control" name="job_description" placeholder="Enter Description" 
                        innerRef={register ({
                            required : 'Description is required',
                            maxLength : 50,
                            validate: value => value.length > 50 ? 'Description exceeded maximium' : true
                          })
                          }
                          disabled = { localStorage.getItem(login_type) !== 'Recruiter'}/>
                        {errors.job_description && <span className="error_txt">{errors.job_description.message}</span>}
                    </div>

                    <div className="form-group">
                        <Label>Requirments</Label>
                        <Input Label className="form-control" name="job_requirements" placeholder="Enter Requirments" innerRef={register ({
                            required : 'Requirments is required',
                            maxLength : 50,
                            validate: value => value.length > 50 ? 'Requirments exceeded maximium' : true
                          })}
                          disabled = { localStorage.getItem(login_type) !== 'Recruiter'}/>
                        {errors.job_requirements && <span className="error_txt">{errors.job_requirements.message}</span>}
                    </div>

                    <div className="form-group">
                        <Label>Location</Label>
                        <Input Label className="form-control" name="job_location" placeholder="Enter Location" 
                        disabled = { localStorage.getItem(login_type) !== 'Recruiter'}/>
                    </div>

                    <div className="form-group">
                        <Label>Timings</Label>
                        <Input Label className="form-control" name="job_timings" placeholder="Enter Timings" 
                        disabled = { localStorage.getItem(login_type) !== 'Recruiter'}/>
                    </div>

                    <div className="form-group">
                        <Label>Salary</Label>
                        <Input Label className="form-control" name="job_salary" placeholder="Enter Salary"
                        disabled = { localStorage.getItem(login_type) !== 'Recruiter'} />
                    </div>
                    <Button disabled={jobByIdSuccess && jobByIdSuccess.applied}>
                        { localStorage.getItem(login_type) === 'Recruiter' ? 'Save' : jobByIdSuccess.applied ? 'Applied' : 'Apply'}
                    </Button>
                </Form>                                                                             
            </div>
        </div>
        </>
    )
}