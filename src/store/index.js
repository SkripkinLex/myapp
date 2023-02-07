import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import { countReducer } from './countReducer'
import { emplReducer } from './emplReducer'
import { goodsReducer } from './goodReducer'

const rootReducer = combineReducers({
    count: countReducer,
    empl: emplReducer,
    goods: goodsReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))
