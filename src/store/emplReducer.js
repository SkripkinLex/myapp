const defaultState = {
    empl: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Steven'},
        {id: 3, name: 'Neena'},
    ]
}

const ADD_EMPL = 'ADD_EMPL'
const REM_LAST_EMPL = 'REM_LAST_EMPL'
const ADD_EMPL_LIST = 'ADD_EMPL_LIST'
const REM_EMPL_BY_ID = 'REM_EMPL_BY_ID'

export const emplReducer = (state = defaultState, action) => {
    switch (action.type){
        case ADD_EMPL:
            return {...state, empl: [...state.empl, {id: Date.now(), name: action.payload}]}
        case REM_LAST_EMPL:
            return {...state, empl: state.empl.slice(0,state.empl.length-1)}
        case REM_EMPL_BY_ID:
            return {...state, empl: state.empl.filter(elem => elem.id != action.payload)}   
        default:
            return state
    }
}

export const addEmplAction = (payload) => ({type: ADD_EMPL, payload})
export const remLastEmplAction = () => ({type: REM_LAST_EMPL})
export const AddEmplArrayAction = (payload) => ({type: ADD_EMPL_LIST, payload})
export const remEmplByIdAction = (payload) => ({type: REM_EMPL_BY_ID, payload})

