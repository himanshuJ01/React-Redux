import React from 'react';
import './App.css';
import { connect } from 'react-redux';



const App = (props) => {
   
   return(
      <div className="App">
      <h1>Name {props.myname} </h1>
     <button onClick={()=>{props.changeName("suresh")}}>Change name</button> 
     </div>
     
    
   );
   }

   const mapStateToProps = (state) =>{
      return {
         myname: state.name
      }
   }

   const mapDispatchToProps = (dispatch) => {
      return {
        changeName : (name) => {dispatch({type : 'Change_Name' , payload: name})}
      }
   }

export default connect(mapStateToProps, mapDispatchToProps)(App);
