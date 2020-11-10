import React from 'react'
import { Button, Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle } from 'reactstrap'
import { useHistory } from 'react-router-dom'
import { login_type } from '../Contants/local_storage'
import { deleteJob } from '../actions/joblistionActions'

export function JobListingComponent({joblisting_reducer, createNewJob, deleteJob}){
    const history = useHistory()

    const editJob = (id) => {
        history.push('/updatejob/'+id)
    }

    const deletethisJob = (id) => {
        deleteJob(id)
    }
    
    const applyJob = (id) => {
        console.log('id')
    }
    
    return(
        <div className="container">
            { localStorage.getItem(login_type) === 'Recruiter' && 
                <div className="add_new">
                    <Button onClick={()=>{createNewJob()}}>Add new Job</Button>
                </div>
            }  
            { joblisting_reducer && joblisting_reducer.jobListing && joblisting_reducer.jobListing.length === 0 && 
                <div className="no_job">
                    <p>---------------No Jobs Found-----------------------</p>
                </div>
            }
            { joblisting_reducer && joblisting_reducer.jobListing && joblisting_reducer.jobListing.length > 0 && 

                joblisting_reducer.jobListing.map((job, index)=>{
                   return <Card>
                            <CardBody>
                                <CardTitle tag="h5">Job Title : {job.job_title}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Description : {job.job_description}</CardSubtitle>
                            </CardBody>
                            <CardBody>
                            <CardText>{job.job_requirements}</CardText>
                                { localStorage.getItem(login_type) === 'Recruiter' &&
                                    <div>
                                        <Button onClick={()=>{editJob(job.id)}}>Edit</Button>
                                        <Button onClick={()=>{deletethisJob(job.id)}}>Delete</Button>
                                    </div>
                                }
                                { localStorage.getItem(login_type) !== 'Recruiter' &&
                                    <div>
                                        <CardLink onClick={()=>{editJob(job.id)}}>View</CardLink>
                                        {/* <CardLink onClick={()=>{applyJob(job.id)}}>Apply</CardLink> */}
                                    </div>
                                }
                            </CardBody>
                        </Card>
                })
            }   
        </div>
    )
}