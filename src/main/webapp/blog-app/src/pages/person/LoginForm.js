import React, { useState } from 'react';

/* import styled from "styled-components";
import Button from 'react-bootstrap/Button'; */

const LoginForm = () => {
	const [person, setPerson] = useState({
		username: "",
      password: "",
	});

	function inputHandle(e) {

    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
    console.log(person);
  }

	function submit(e){

		e.preventDefault();

    fetch("http://localhost:8000/loginProc",{
      method:"POST",
      body:JSON.stringify(person),
      headers:{
        'Content-Type':"application/json; charset=utf-8"
      }
    }).then(res=>{
      console.log(1,res);
      for(let header of res.headers.entries()){
        if(header[0] ==="authorization"){
		  localStorage.setItem("Authorization",header[1]);
		  
        }

      }
      return res.text();
    }).then(res=>{
      if(res ==="ok"){
		console.log(3,res);
		alert("로그인 성공");
	  }
	  
	});
	
	}
    //localStorage.setItem("jwt","abcabc");
    //let jwtToken = localStorage.getItem("jwt");
    //console.log(jwtToken);
  
	return (

				<div>
					 <h2>Heejung's Blog</h2>
					 <h4>Login Page</h4>
					<form>
						<input
         				 type="text"
						  onChange={inputHandle}
						  value={person.username}
          				 name="username"
        				 placeholder="username"
      					  /><br/>

						<input
         				 type="password"
						 onChange={inputHandle}
						 value={person.password}
          				 name="password"
        				 placeholder="password"
      					  /><br/>
							<button onClick={submit}>로그인</button>
					</form>
				</div>
	

	);
};

export default LoginForm;