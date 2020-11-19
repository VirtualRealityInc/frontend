import { IS_LOADING, LOADED, ERROR, ADD_PROJECT, FOUND_PROJECTS, GET_PROJECT } from '../Actions'

const initailState = {
    users: [
        {
            name: 'Fernando',
            email: 'example@123.com',
            id: 0,
        },
    ],

    projects: [
        {
            project_name: "test",
            project_description: "testing123",
            photo_src: null,
            funding_goal: 10000,
            creator_id: 0,
            id: 0
        },
    ],

    viewing: [{
        project_name: "test",
        project_description: "testing123",
        photo_src: null,
        funding_goal: 10000,
        creator_id: 0,
        id: 0
    }],

    isLoading: false,
    error: '',
}

export const mainReducer = (state=initailState, action) => {
    switch(action.type){
        case FOUND_PROJECTS:
            return {...state, projects: action.payload}

        case GET_PROJECT:
            return {...state, viewing: action.payload}
        default:
            return state
    }
}