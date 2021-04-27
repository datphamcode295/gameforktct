import React, { useState } from 'react';
import firebase from '../../database/firebase';

function Login() {
    const  [name, setName] = useState('');
    const  [id, setId] = useState('Unknow');

    
    const handleOnChange = (e) => {
        setName(e.target.value); 
    }
    const creatAccount = (a) => {
        if(name!==""){
            firebase.auth().signInAnonymously();
            firebase.auth().onAuthStateChanged((user)=>{
                //setId(firebase.auth().currentUser.uid);
                
                if(user){
                    setId("user.uid");
                
                firebase.database().ref('users/'+ name).set({
                name,
                id,//chua nhap duoc id 
                });}
            //firebase.database().ref('users').
            }  )
    } else{
        // khi khong nhap ten
    };
    };
   
    return (
        <div className="login">
            <input type="text" onChange={handleOnChange} value={name}></input>
            <button onClick={creatAccount}>Click!!!</button>

        </div>
    );
}

export default Login;
