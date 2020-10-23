import React from 'react';
import { Route, Switch } from "react-router-dom";

import './App.css';
import LoginForm from './pages/person/LoginForm';
import JoinForm from './pages/person/JoinForm';
import Header from './components/Header';
import BoardForm from './pages/board/BoardForm';
import BoardList from './pages/board/BoardList';
import BoardDetail from './pages/board/BoardDetail';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/loginForm" exact={true} component={LoginForm} />
        <Route path="/joinForm" exact={true} component={JoinForm} />
        <Route path="/boardForm" exact={true} component={BoardForm} />
        <Route path="/boardList" exact={true} component={BoardList} />
        <Route path="/boardDetail/:id" exact={true} component={BoardDetail} />
      </Switch>
    </div>
  );
}

export default App;
