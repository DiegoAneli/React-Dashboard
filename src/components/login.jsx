import { React, useState, useEffect } from "react";
import "../App.css";
import jwt_decode from "jwt-decode";
import Home from "./home";



function Login() {

  const [ user, setUser ] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: "+ response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event){
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  //CREDENZIALI GOOGLE INITIALIZE
  useEffect(()=> {
    /* global google */
    google.accounts.id.initialize({
      client_id: "795175312586-386q1rig633cdkv90ot0iabqdan2jvfh.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    //RENDER BUTTON
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    );

    google.accounts.id.prompt();

  },[]);


  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };


  return (
    <div className="main">

      <div id="signInDiv"></div>
      
      { 
        Object.keys(user).length !== 0 && 
        <div> 
        <button type="button" class="btn btn-primary" onClick={ (e) => handleSignOut(e)}>Disconnetti</button>
        <Home />
        </div>
      }
      { user && 
        
        <>
      
       
          
        </>
      }
    </div>
  );
}
export default Login;