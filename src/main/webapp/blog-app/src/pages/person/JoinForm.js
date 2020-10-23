import React, { useState } from 'react';

const JoinForm = () => {
	const [person, setPerson] = useState({
		username:"",
		password:"",
		email:"",
	});

	function inputHandle(e){
		setPerson({
			...person,
			[e.target.name]: e.target.value,
		});
		console.log(person);
	}

	function submit(e){
		e.preventDefault();
		console.log(person);

		fetch("http://localhost:8000/joinProc", {
     method:"POST",
      body:JSON.stringify(person),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          alert("회원가입 성공");
        }
      });
	}
	return (

				<div>
					 <h2>Heejung's Blog</h2>
					 <h4>Join Page</h4>
					<form>
						<input
         				 type="text"
          				 name="username"
						 placeholder="username"
						 onChange={inputHandle}
      					  /><br/>

						<input
         				 type="password"
          				 name="password"
						 placeholder="password"
						 onChange={inputHandle}
      					  /><br/>
							<input
         				 type="text"
          				 name="email"
						 placeholder="email"
						 onChange={inputHandle}
      					  /><br/>
							<button onClick={submit}>회원가입</button>
					</form>
				</div>
	
	);
};

export default JoinForm;