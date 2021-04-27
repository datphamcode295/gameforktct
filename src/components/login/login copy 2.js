import React, {  Component } from 'react';
import firebase from '../../database/firebase';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            id : '',
        }
    }
    
    render(){
        const handleOnChange = (e) => {
            this.setState({name :e.target.value}); 
        }
        const creatAccount = () => {
            if(this.state.name){
                firebase.auth().signInAnonymously();
                firebase.auth().onAuthStateChanged((user)=>{
                    //setId(firebase.auth().currentUser.uid);
                    
                    if(user){
                        console.log(user);
                    
                    firebase.database().ref('users/'+ user.uid).set({
                        name : this.state.name,
                        answer : "",
                        score : 0,
                    });}
                }  )
        } else{
           alert('Chưa Nhập Tên Bạn Ui ^^');
        };
        };
       
        return (
            <div className="login">
                <input type="text" onChange={handleOnChange} value={this.state.name} placeholder="Nhập Tên"></input>
                <button onClick={creatAccount}>Play !!!</button>
    
            </div>
        );
    }

    
    
}

export default Login;
