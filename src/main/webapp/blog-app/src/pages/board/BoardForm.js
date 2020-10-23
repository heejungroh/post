import React, { useState } from 'react';

const BoardForm = () => {

const [board, setBoard] = useState({
		title:"",
		content:"",
	});

	function inputHandle(e){
		setBoard({
			...board,
			[e.target.name]: e.target.value,
		});
		console.log(board);
	}

	function submit(e){
		e.preventDefault();
		console.log(board);

		fetch("http://localhost:8000/board", {
     method:"POST",
      body:JSON.stringify(board),
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          alert("게시글 등록 성공");
        }else{
			alert("게시글 등록 실패");
		}
      });
	}

	return (
		<div>
			<h2>Heejung's Blog</h2>
					 <h4>Board Page</h4>
					 <form>
						<input
         				 type="text"
          				 name="title"
						 placeholder="title"
						 onChange={inputHandle}
      					  /><br/>

						<textarea
          				 name="content"
						 placeholder="content"
						 onChange={inputHandle}
      					  ></textarea><br/>

							<button onClick={submit}>등록</button>
					</form>
		</div>
	);
};

export default BoardForm;