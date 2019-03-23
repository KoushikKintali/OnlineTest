export const actionCreator=(payload,actionName)=>{
    console.log("Action Creator called");
return{
        payload:payload,
        type:actionName
}
}
