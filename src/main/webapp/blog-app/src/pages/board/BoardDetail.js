import React, { useEffect, useState } from 'react';

const BoardDetail = (props) => {
	console.log("디테일", props.match.params.id);

	const id =props.match.params.id

	const [board, setBoard] = useState({
		title: "",
		content: "",
	});


	function boardFetch(id) {
		fetch("http://localhost:8000/board/" + id)
			.then((res) => res.json())
			.then((res) => {
				setBoard(res);
			});
	}

	useEffect(() => {
		boardFetch(props.match.params.id);
	}, []);

	const inputChange = (e) => {
		setBoard({ ...board, [e.target.name]: e.target.value });
		console.log(board);
	};

	const updateBtn = (e) => {
	e.preventDefault();
	
    fetch("http://localhost:8000/board/" + id, {
      method: "PUT",
      body: JSON.stringify(board),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          alert("수정 성공");
          
        }else{
			alert("수정 실패");
		}
	  });
	  
	  

  };

	return (
		<div>
			<h2>Heejung's Blog</h2>
			<h4>{props.match.params.id}Board Detail Page</h4>
			<form>
				<div key={board.id}>
					<input
						type="text"
						name="title"
						onChange={inputChange}
						value={board.title}
					/><br/>
					<textarea
						name="content"
						onChange={inputChange}
						value={board.content}
					></textarea>
				</div>
				<button onClick={updateBtn}>수정</button>
				<button>삭제</button>
			</form>
		</div>
	);
};

export default BoardDetail;