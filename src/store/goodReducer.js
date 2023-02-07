const defaultState = {
    goods: [
        {id: 1, name: 'Велосипед', count: 3},
        {id: 2, name: 'Самокат', count: 7},
        {id: 3, name: 'Ролики', count: 1}
    ]
}

const INCR_COUNT = 'INCR_COUNT'
const DECR_COUNT = 'DECR_COUNT'
const ADD_NEW_GOOD = 'ADD_NEW_GOOD'



export const goodsReducer = (state = defaultState, action) => {
    switch (action.type){
        case INCR_COUNT:
            return {...state, goods: state.goods.map(elem => {
                if (elem.id == action.payload){
                    elem.count += 1
                }
                return elem
            })}
        case DECR_COUNT:
            let good = state.goods.find(elem=> elem.id === action.payload)
            if (good.count === 1){
                return {...state, goods: state.goods.filter(elem => elem.id != action.payload)}
            } else {
                return {...state, goods: state.goods.map(elem => {
                    if (elem.id == action.payload){
                        elem.count -= 1
                    }
                    return elem
                })}
            }
        case ADD_NEW_GOOD:
            let newGood = state.goods.find(elem => elem.name === action.payload)
            if (newGood){
                return {...state, goods: state.goods.map(elem => {
                    if (elem.id == newGood.id){
                        elem.count += 1
                    }
                    return elem
                })}
            } else {
                return {...state, goods: [...state.goods, {id: Date.now(), name: action.payload, count: 1}]}
            }
        default:
            return state
    }
}




export const incrCountAction = (payload) => ({type: INCR_COUNT, payload })
export const decrCountAction = (payload) => ({type: DECR_COUNT, payload })
export const addNewGoodAction = (payload) => ({type: ADD_NEW_GOOD, payload})

