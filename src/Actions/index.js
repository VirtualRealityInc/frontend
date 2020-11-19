import { axiosWithAuth } from '../Utility/axiosWithAuth'
export const IS_LOADING = 'IS_LOADING'
export const ERROR = 'ERROR'
export const LOADED = 'LOADED'
export const ADD_PROJECT = 'ADD_PROJECT'
export const FOUND_PROJECTS = 'FOUND_PROJECTS'
export const GET_PROJECT = "GET_PROJECT"

export const addProject = (project) => (dispatch) => {
    dispatch({type: IS_LOADING})
    axiosWithAuth().post("/projects", project)
        .then(res => {
            console.log("Posting project Data: ", res)
            dispatch({type: LOADED})
        }).catch(err => {
            console.log("ERROR Posting project: ", err.message)
            dispatch({type: ERROR})
        })
}

export const findProjects = () => (dispatch) => {
    axiosWithAuth().get("/projects")
        .then(res => {
            console.log("Projects: ", res.data)
            dispatch({type: FOUND_PROJECTS, payload: res.data})
        }).catch(err => {
            console.log("Error gathering projects: ", err)
        })
}

export const getProject = (id) => (dispatch) => {
    axiosWithAuth().get(`/projects/${id}`)
        .then(res => {
            console.log(res.data)
            dispatch({type:GET_PROJECT, payload: res.data })
        }).catch(err => {
            console.log(err)
        })
}

export const editProject = (id, project) => (dispatch) => {
    axiosWithAuth().put(`/projects/${id}`, project)
        .then(res=>{
            console.log("New Project", res)
        }).catch(err => {
            console.log("Edit Project Error: ", err)
        })
}