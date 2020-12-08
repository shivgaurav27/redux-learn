const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAM'
const redux = require('redux')
const combinedReducers = redux.combineReducers
const createStore = redux.createStore

function buyIceCream(){
    return{
        type:BUY_ICECREAM,
        info:'First redux action'
    }
}

function buyCake(){
    return{ 
        type:BUY_CAKE,
        info:'First redux action'
    }
}

// (prevState,action) => newState
// const initialState={
//     numOfCakes:10
// }

const initialCakeState={
    numOfCakes:19
}
const initialIceCreamState={
    numOfIceCreams:20
}

// const reducer = (state=initialState , action)=>{
//      switch(action.type){
//          case BUY_CAKE:return{
//              ...state,
//              numOfCakes:state.numOfCakes-1
//          }
//          default:return state
//      }
// }

const cakeReducer = (state=initialCakeState , action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numOfCakes:state.numOfCakes-1
        }
        default:return state
    }

}
const iceCreamReducer = (state=initialIceCreamState , action)=>{
    switch(action.type){
        case BUY_ICECREAM:return{
            ...state,
            numOfIceCreams:state.numOfIceCreams-1
        }
        default:return state
    }

}

const rootReducers = combinedReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})


const store = createStore(rootReducers)
console.log("Initial ",store.getState())
const unsubscribe = store.subscribe(()=>console.log("Updated state",store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
unsubscribe()