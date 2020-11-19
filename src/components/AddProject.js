import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addProject } from '../Actions'
import {useHistory, Redirect} from 'react-router-dom'

import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { FlexyDiv } from './Projects'

const initailFormValues = {
    title: '',
    description: '',
    amtToRaise: 10000,
    img: '',
    userName: '',
    email: '',
    id: 0,
}

const AddProject = (props) => {
    const [form, setForm] = useState(initailFormValues)
    const { push } = useHistory()
    const onChange = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const onSubmit = e => {
        e.preventDefault()
        const newForm = {
            project_name: form.title,
            project_description: form.description,
            funding_goal: Number(form.amtToRaise)
        }
        console.log(newForm)
        props.addProject(newForm)
        push("/projects")
    }
    useEffect(()=>{
        if(localStorage.role !== "fundraiser"){
            push("/")
        }
    },[])
    return(
        <FlexyDiv>
            <Form onSubmit={onSubmit}>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label style={{color: "white"}} htmlFor='title'>Title: </Label>
                            <Input onChange={onChange} type='text' name='title' placeholder='Title for fundraiser'/>
                            <Label style={{color: "white"}} htmlFor='description'>Description: </Label>
                            <Input onChange={onChange} type='textarea' name='description' placeholder='Description for fundraiser'/>
                            <Label style={{color: "white"}} htmlFor='amtToRaise'>Amout you want to raise: </Label>
                            <Input onChange={onChange} type='number' name='amtToRaise' placeholder='Fundraiser goal'/>
                            <Label style={{color: "white"}} htmlFor='userName'>Name: </Label>
                            <Input onChange={onChange} type='text' name='userName' placeholder='Enter your name'/>
                            <Label style={{color: "white"}} htmlFor='email'>Email: </Label>
                            <Input onChange={onChange} type='email' name='email' placeholder='Enter Email'/>
                            <br/>
                            <Button>Submit Project</Button>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        </FlexyDiv>
    )
}


const mapStateToProps = (state) => {
    return {
        users: state.users,
        projects: state.projects,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, {addProject})(AddProject)