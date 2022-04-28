import React from 'react';
import { Route } from 'react-router-dom';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';
import Mainpage1 from './pages/Mainpage1';


const App = () => {
  return (
    <>
      <Route component={Loginpage} path="/login" />
      <Route component={Registerpage} path="/register" />
      <Route component={Mainpage1} path={['/']} exact />  
    </> //mainpage 주소 경로에 유저 아이디 추가 필요함
  );
};

export default App;
