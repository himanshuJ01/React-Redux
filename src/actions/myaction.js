// export const anotherName = (name)=>{
//     return {
//         type: 'Change_Name',
//         payload : name
//     }
// }

export const anotherName = ()=>{
    return async (dispatch)=> {
   const data = await fetch('https://jsonplaceholder.typicode.com/users')
   const res2 = await data.json()
   dispatch({type: 'Change_Name', payload: res2[0].name})

        
    }
}






