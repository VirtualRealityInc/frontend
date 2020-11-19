import React from 'react'
import styled from 'styled-components'
import { Card, CardText, CardBody,CardTitle, CardSubtitle, Row, Col } from 'reactstrap';
import { useHistory } from 'react-router-dom'


const Div = styled.div`
margin:.5rem;
`

const Project = (props) => {
    const { push } = useHistory()
    const onClick = () => {
        if(localStorage.role === "fundraiser"){
            push(`/editproject/${props.id}`)
        } else{
            push("/projects")
        } 
    }
    return(
        <Div onClick={onClick}>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle style={{color: 'white'}} tag='h5'>{props.title}</CardTitle>
                            <CardSubtitle style={{color: 'white'}} tag='h6'>$ {props.subTitle}</CardSubtitle>
                            <CardText>{props.desc}</CardText>
                        </CardBody>
                        <CardBody>
                            {/* <CardText>FundRaiser: {props.usr}</CardText> */}
                            {/* <CardText>Contact: {props.email}</CardText> */}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Div>
    )
}

export default Project