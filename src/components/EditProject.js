import React, {useEffect, useState} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getProject, editProject } from '../Actions'
import { connect } from 'react-redux'

import { Card, CardText, CardBody,CardTitle, CardSubtitle, Row, Col, Button, Form, FormGroup, Label, Input,} from 'reactstrap';
import { FlexyDiv } from './Projects';



const EditProject = (props) => {    
    const proj = props.project[0]
    const initailFormValues = {
        title: props.project.project_name,
        goal: props.project.funding_goal,
        desc: props.project_description,
    }
    const [formVales, setFormValues] = useState(proj)
    const [isEditing, setIsEditing] = useState(false)
    
    const { id } = useParams()
    const { push } = useHistory()
    
    useEffect(() => {
        if(localStorage.role !== "fundraiser"){
            push("/")
        }else{
            props.getProject(id)
            console.log(id)
        }
    },[id])

    const onEdit = () => {
        setIsEditing(true)
    }

    const onChange = e => {
        setFormValues({...formVales, [e.target.name]: e.target.value})
        console.log(formVales)
    }

    const onSubmit = e => {
        e.preventDefault()
        const newData = {
            project_name: formVales.title,
            project_description: formVales.desc,
            funding_goal: Number(formVales.goal)
        }
        props.editProject(id, newData)
        setIsEditing(false)
        push("/projects")
    }
    console.log(props.project)
    
    return(
        <FlexyDiv style={{margin:"1rem"}}>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle style={{color: "white"}}>{props.project[0].project_name}</CardTitle>
                            <CardSubtitle style={{color: "white"}}>{props.project[0].funding_goal}</CardSubtitle>
                            <CardText>{props.project[0].project_description}</CardText>
                            {isEditing ? <></> : <Button onClick={onEdit} style={{color:"white"}}>Edit information</Button>}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {isEditing ?
            <div style={{margin:"1rem"}}>
                <Form onSubmit={onSubmit}>
                    <FormGroup>
                            <Label style={{color: "white"}} htmlFor='title'>Title: </Label>
                            <Input onChange={onChange} value={formVales.title} type='text' name='title' placeholder='Title for fundraiser'/>
                            <Label style={{color: "white"}} htmlFor='desc'>Description: </Label>
                            <Input onChange={onChange} value={formVales.desc} type='textarea' name='desc' placeholder='Description for fundraiser'/>
                            <Label style={{color: "white"}} htmlFor='goal'>Amout you want to raise: </Label>
                            <Input onChange={onChange} value={formVales.goal} type='number' name='goal' placeholder='Fundraiser goal'/>
                            <br/>
                            <Button>Finish Edits</Button>
                    </FormGroup>
                </Form>
            </div> : <></>}
        </FlexyDiv>
    )
}

const mapStateToProps = (state) => {
    return{
        project: state.viewing
    }
}
export default connect(mapStateToProps, {getProject, editProject})(EditProject)