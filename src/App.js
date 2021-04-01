import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { anotherName} from './actions/myaction'


function App(props){
   
   const mywish = props.mywish.map(item => {
      return <h2 key={Math.random()}>{item}</h2>
   })
   return(
      <div className="App">
      <h1>Name {props.myname} </h1>
      {mywish}
     <button onClick={()=>{props.changeName()}}>Change name</button> 
     </div>
     
    
   );
   }

   const mapStateToProps = (state) =>{
      return {
         myname: state.name,
         mywish: state.wish
      }
   }

   const mapDispatchToProps = (dispatch) => {
      return {
        changeName : () => {dispatch(anotherName())}
      }
   }

export default connect(mapStateToProps, mapDispatchToProps)(App);
