import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { findProjects} from '../Actions'

import styled from 'styled-components'

import Project from './Project'
export const FlexyDiv = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    `
const Projects = (props) => {
    useEffect(() => {
        props.findProjects()
    }, [])
    return(
        <FlexyDiv>
            {props.projects.map(item => <Project key={item.id} id={item.id} title={item.project_name} subTitle={item.funding_goal} desc={item.project_description}/>)}
        </FlexyDiv>
    )
}



const mapStateToProps = (state) => {
    return{
        users: state.users,
        projects: state.projects,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, {findProjects})(Projects)