import { questionOperations } from "../models/questionOperations";

export const reducer=(state={Array:[]},action)=>{
    
    if(action.type=="Add"){
        console.log("Reducer Called");
        questionOperations.add(action.payload)
        console.log("Before State is ",state)
        return {...state,'Array':questionOperations.getArray()}

    }
    // console.log("State is ",state)
    return state;
}