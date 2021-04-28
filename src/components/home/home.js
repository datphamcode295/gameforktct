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
            // firebase.auth().onAuthStateChanged((user)=>{
            //     if(user)
            //     if(user.uid){
                    
            //         this.setState({id: user.uid});
               
            //     }
            // });
            const db = firebase.firestore();

            firebase.auth().onAuthStateChanged((user)=>{

                this.setState({id: user.uid});
                //console.log(user.uid)
                db.collection("users").doc(this.state.id)
                 .onSnapshot((doc) => {
                     
                    this.setState({score : doc.data().score});
                    this.setState({name : doc.data().name});
                    console.log("Current data: ", doc.data());
                    
                     //this.setState(score = doc)
                 } )
            });
            // if(this.state.id){
            //     db.collection("users").doc(this.state.id)
            //      .onSnapshot((doc) => {
                     
            //         this.setState({score : doc.data().score});
            //         this.setState({name : doc.data().name});
            //         console.log("Current data: ", doc.data());
                    
            //          //this.setState(score = doc)
            //      } )
            // }
            
        }
        // componentDidUnmount (){
        //     const db = firebase.firestore();
        //     if(this.state.id){

        //     db.collection("users").doc(this.state.id).onSnapshot((snapshot)=>{
        //         this.setState({score : snapshot.data().score});
        //     })} }
        // componentDidUpdate (){
        //     const db = firebase.firestore();
        //     if(this.state.id){

        //     db.collection("users").doc(this.state.id).onSnapshot((snapshot)=>{
        //         this.setState({score : snapshot.data().score});
        //     })} }
        
   render() {
    

    //const db = firebase.firestore();
    // firebase.auth().onAuthStateChanged((user)=>{

    //     this.setState({id: user.uid});
    //     console.log(user.uid)
    // })
    // if(this.state.id){
    //     db.collection("users").doc(this.state.id)
    //      .onSnapshot((doc) => {
             
    //         this.setState({score : doc.data().score});
    //         this.setState({name : doc.data().name});
            
    //          //this.setState(score = doc)
    //      } )
    // }
     
    
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
  
    // if(this.state.id){
    //     db.collection("users").doc(this.state.id).onSnapshot((doc => {
    //         console.log("Current data: ", doc.data());
    //     }))
    
    // }
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


