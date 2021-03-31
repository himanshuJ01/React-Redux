const iState = {
    name :"ramesh",
    wishes :['eat', 'code']
}


const reducer =(state = iState,action) => {

   if(action.type === 'Change_Name'){
       return {
           ...state,
           name: action.payload
       }
   }
    return state;
}

export default reducer;