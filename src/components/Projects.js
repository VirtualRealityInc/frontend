import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Project from './Project'

const Projects = (props) => {
    const FlexyDiv = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    `
    return(
        <FlexyDiv>
            {props.projects.map(item => <Project key={item.id} usr={item.userName} email={item.email} title={item.title} subTitle={item.amtToRaise} desc={item.description}/>)}
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

export default connect(mapStateToProps, {})(Projects)