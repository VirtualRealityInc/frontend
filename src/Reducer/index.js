import { IS_LOADING, LOADED, ERROR } from '../Actions'

const initailState = {
    data: {},
}

export const mainReducer = (state=initailState, action) => {
    switch(action.type){
        default:
            return state
    }
}