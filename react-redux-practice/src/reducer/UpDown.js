// import ChangeTheNumber from ".";
// import { combineReducers } from 'redux';

// const reducers=combineReducers({
//     ChangeTheNumber
// })
// export default reducers



const initialState=0;

const ChangeTheNumber=(state=initialState , action)=>{
    switch(action.type){
        case "INCREMENT":return state + action.payload;
        case "DECREMENT":return state - 1;
        default : return state
    }
}
export default ChangeTheNumber