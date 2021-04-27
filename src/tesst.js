import React, { useState } from 'react';
import firebase from '../../database/firebase';

function Login() {
    const  [name, setName] = useState('');
    const  [id, setId] = useState("");
    
    const handleOnChange = (e) => {
        setName(e.target.value);
        
    }
    const creatAccount = () => {
        if(name!==""){
            firebase.auth().signInAnonymously();
           
            
            //console.log(a.uid);
            firebase.auth().onAuthStateChanged(user=>{
                setId(user.uid);
                // const account = {
                //     name,
                //     id,};
                   // accountRef.push(account);
                });
            firebase.database().ref('users/'+ name).set({
                name,
                id,
            })
        //const accountRef = firebase.database().ref("account").child(name);
        //firebase.auth().onAuthStateChanged(user=>{console.log(user.uid)});
        
        
        
        //const a = firebase.database().ref("account");
          
        //firebase.auth().onAuthStateChanged(user=>{console.log(user.uid);});
        
    //    a.on('value', (snapshot) => {
    //         console.log(snapshot.val());
    //     } );
    } else{
        // khi khong nhap ten
    };
    };
    const signOutbt = ()=>{
        firebase.auth().signOut();

    }
    return (
        <div className="login">
            <input type="text" onChange={handleOnChange} value={name}></input>
            <button onClick={creatAccount}>Click!!!</button>
            <button onClick={signOutbt}>Signout</button>

        </div>
    );
}

export default Login;
