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
       // componentWillMount() {
          componentDidMount(){  
         
            const db = firebase.firestore();

            firebase.auth().onAuthStateChanged((user)=>{

                this.setState({id: user.uid});
                //console.log(user.uid)
                db.collection("users").doc(this.state.id)
                 .onSnapshot((doc) => {
                     
                    this.setState({score : doc.data().score});
                    this.setState({name : doc.data().name});
                    console.log("Current data: ", doc.data());
                 } )
            });
           
            
        }
        
        
   render() {
    

    
     
    
    const signOutbt = ()=>{
        firebase.auth().signOut();

    }
    const handleOnChange = (e) => {
        this.setState({answer :e.target.value}); 
    }
    const updateAnswer = () => {
        const db = firebase.firestore();
        db.collection("users").doc(this.state.id).update({
        name : this.state.name,
        answer : this.state.answer,
        score : this.state.score,
    });
    }
  
    
    const showScore =   'Diem cua ban : ' +  this.state.score  ;
    
    

    return (
        <div>
            <button onClick={signOutbt}>Signout</button>
            <div className="container">
                <div className = "score">{showScore} </div>
                
                <div className = "question"> Question</div>
                <div className="answer">
                <input type="text" onChange={handleOnChange} value={this.state.answer} placeholder="Nhập Answer"></input>
                <button onClick={updateAnswer}>Answer !!!</button>
    
            </div>
            </div>
        
        </div>
    )
   } ;
}

export default Home;


