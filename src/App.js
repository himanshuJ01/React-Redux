import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { anotherName} from './actions/myaction'


const App = (props) => {
   
   return(
      <div className="App">
      <h1>Name {props.myname} </h1>
     <button onClick={()=>{props.changeName()}}>Change name</button> 
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
        changeName : (name) => {dispatch(anotherName(name))}
      }
   }

export default connect(mapStateToProps, mapDispatchToProps)(App);
