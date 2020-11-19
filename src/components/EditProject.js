import React, {useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getProject } from '../Actions'
import { connect } from 'react-redux'

import { Card, CardText, CardBody,CardTitle, CardSubtitle, Row, Col } from 'reactstrap';
import { FlexyDiv } from './Projects';

const EditProject = (props) => {
    const { id } = useParams()
    const { push } = useHistory()
    useEffect(() => {
        if(localStorage.role !== "fundraiser"){
            push("/")
        }else{
            props.getProject(id)
        }
    },[id])
    const proj = props.project[0]
    console.log("Dis a project", proj)
    return(
        <FlexyDiv>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle style={{color: "white"}}>{proj.project_name}</CardTitle>
                            <CardSubtitle style={{color: "white"}}>{proj.funding_goal}</CardSubtitle>
                            <CardText>{proj.project_description}</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </FlexyDiv>
    )
}

const mapStateToProps = (state) => {
    return{
        project: state.viewing
    }
}
export default connect(mapStateToProps, {getProject})(EditProject)