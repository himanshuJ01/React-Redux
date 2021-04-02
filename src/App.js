import React from 'react';
import './App.css';
import { anotherName} from './actions/myaction';
import {useSelector,useDispatch} from 'react-redux';



function App(props){
   
   const dispatch = useDispatch()
   

  const data = useSelector((state)=>{
     return state
   })

  
   const mywish = data.wish.map(item => {
      return <h2 key={Math.random()}>{item}</h2>
   })

   return(
      <div className="App">
      <h1>Name {data.name} </h1>
      {mywish}
     <button onClick={()=>{dispatch(anotherName())}}>Change name</button> 
     </div>
     
    
   );
   }

   // const mapStateToProps = (state) =>{
   //    return {
   //       myname: state.name,
   //       mywish: state.wish
   //    }
   // }

   // const mapDispatchToProps = (dispatch) => {
   //    return {
   //      changeName : () => {dispatch(anotherName())}
   //    }
   // }

export default App;
