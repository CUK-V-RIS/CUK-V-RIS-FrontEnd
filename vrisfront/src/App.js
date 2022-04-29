import React from 'react';
import { Route } from 'react-router-dom';
import Loginpage from './pages/Loginpage';
import VeganStage from './pages/VeganStage.js';
import Mainpage1 from './pages/Mainpage1';
import MyPage from './pages/MyPage';


const App = () => {
  return (
    <>
      <Route component={Loginpage} path="/login" />
      <Route component={VeganStage} path="/stage" />
      <Route component={Mainpage1} path={['/']} exact />  
      <Route component={MyPage} path="/mypage" />
    </> //mainpage 주소 경로에 유저 아이디 추가 필요함
  );
};

export default App;
