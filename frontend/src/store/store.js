import {createStore} from "redux";

const initialState ={
    email:undefined,
};

const reducer = (state,action) => {
    if (state === undefined){
    return initialState;
}

if(action.type ==="setEmail"){
    const newState= {...state};
    newState.email =action.payload;
    return newState;
}
return state;
};




const store = createStore(reducer);
export default store;