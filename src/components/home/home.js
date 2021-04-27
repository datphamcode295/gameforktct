import React, { Component } from 'react'
import firebase from '../../database/firebase'


class Home extends Component {
    constructor(props){
            super(props);
            this.state = {
                score : 0,
                id : "",
                name : "",
                answer : "",
            }
        }
        componentWillMount() {
            
            firebase.auth().onAuthStateChanged((user)=>{
                if(user)
                if(user.uid){
                    
                    this.setState({id: user.uid});
               
                }
            });
        }
    
   render() {
    

    const db = firebase.firestore();
    if(this.state.id){
        db.collection("users").doc(this.state.id)
         .onSnapshot((doc) => {
            this.setState({score : doc.data().score});
             //this.setState(score = doc)
         } )
    }
     
    
    const signOutbt = ()=>{
        firebase.auth().signOut();

    }
    const handleOnChange = (e) => {
        this.setState({answer :e.target.value}); 
    }
    const updateAnswer = () => {
        
    }
    
    const showScore =  'Diem cua ban : ' +  this.state.score  ;

    return (
        <div>
            <button onClick={signOutbt}>Signout</button>
            <div className="container">
                <div className = "score">{showScore} </div>
                
                <div className = "question"> Question</div>
                <div className="answer">
                <input type="text" onChange={handleOnChange} value={this.state.name} placeholder="Nhập Answer"></input>
                <button onClick={updateAnswer}>Answer !!!</button>
    
            </div>
            </div>
        
        </div>
    )
   } ;
}

export default Home;


