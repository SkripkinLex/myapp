const defaultState = {
    count: 0
}

let INCR = 'INCR'
let DECR = 'DECR'
let RESET = 'RESET'


export const countReducer = (state = defaultState, action) => {
    //console.log (action)
    switch (action.type){
        case INCR:
            return {...state, count: state.count + action.payload}
        case DECR:
            return {...state, count: state.count - action.payload}
        case 'RESET':
            return {...state, count: 0}
        default:
            return state    
    }
}

export const incrAction = (payload) => ({type: INCR, payload })

export const decrAction = (payload) => ({type: DECR, payload })

export const resetAction = () => ({type: RESET})