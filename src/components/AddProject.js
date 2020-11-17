import React, { useState } from 'react'
import { connect } from 'react-redux'

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
    const onChange = e => {
        setForm({...form, [e.target.name]: e.target.value})
        console.log(form)
    }
    return(
        <FlexyDiv>
            <Form>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label htmlFor='title'>Title: </Label>
                            <Input onChange={onChange} type='text' name='title' placeholder='Title for fundraiser'/>
                            <Label htmlFor='description'>Description: </Label>
                            <Input onChange={onChange} type='textarea' name='description' placeholder='Description for fundraiser'/>
                            <Label htmlFor='amtToRaise'>Amout you want to raise: </Label>
                            <Input onChange={onChange} type='number' name='amtToRaise' placeholder='Fundraiser goal'/>
                            <Label htmlFor='userName'>Name: </Label>
                            <Input onChange={onChange} type='text' name='userName' placeholder='Enter your name'/>
                            <Label htmlFor='email'>Email: </Label>
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

export default connect(mapStateToProps, {})(AddProject)