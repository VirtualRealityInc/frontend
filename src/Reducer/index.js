import { IS_LOADING, LOADED, ERROR, ADD_PROJECT } from '../Actions'

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
            title: 'Test Proj',
            description: 'This will serve as my testing project',
            amtToRaise: 10000,
            img: '',
            userName: 'Fernando',
            email: 'exapmle@123.com',
            id: 0,
        },
    ],

    isLoading: false,
    error: '',
}

export const mainReducer = (state=initailState, action) => {
    switch(action.type){
        case ADD_PROJECT:
            return {...state, projects: [...state.projects, action.payload]}

        default:
            return state
    }
}