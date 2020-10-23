import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BoardList = () => {
	const [boards, setBoard] = useState([]);

	useEffect(() => {  
		fetch("http://localhost:8000/board", {
      method: "get",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then(function (res) {
        console.log(res);
        return res.json();
      })
      .then(function (res) {
        console.log(res);
        setBoard(res);
      });
	}, []);
	return (
		<div>
			{boards.map((board)=>(
				<div key={board.id}>
						<Link to={"/boardDetail/"+board.id}><h4>{board.title}</h4></Link>
				<h4>{board.content}</h4>
					</div> 
			))}
				
			

		</div>
	);
};

export default BoardList;