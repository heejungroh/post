import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<ul>
      <li>
        <Link to="/loginForm">
          로그인
        </Link>
      </li>
      <li>
        <Link to="/joinForm">
          회원가입
        </Link>
      </li>
	  <li>
        <Link to="/boardForm">
         게시물 작성
        </Link>
      </li>
	  <li>
        <Link to="/boardList">
         게시물 목록
        </Link>
      </li>
    </ul>
		</div>
	);
};

export default Header;