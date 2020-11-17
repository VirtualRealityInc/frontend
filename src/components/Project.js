import React from 'react'
import { Card, CardText, CardBody,CardTitle, CardSubtitle, Row, Col } from 'reactstrap';

const Project = (props) => {
    console.log(props.title)
    return(
        <div>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <CardTitle tag='h5'>{props.title}</CardTitle>
                            <CardSubtitle tag='h6'>{props.subTitle}</CardSubtitle>
                            <CardText>{props.desc}</CardText>
                        </CardBody>
                        <CardBody>
                            <CardText>FundRaiser: {props.usr}</CardText>
                            <CardText>Contact: {props.email}</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}


export default Project