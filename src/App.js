import React from 'react'
import './App.css';
import {useState, useEffect} from 'react';
import {Route, Switch, useHistory} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage'
import SignUp from './pages/SignUp';
import Heal from './pages/Heal';
import Board from './pages/Board';
import axios from 'axios';
import Loading from './pages/LoadingPage';


function App() {

  const [isLogin, setIsLogin] = useState(false);
  const [userinfo, setUserinfo] = useState(null);
  const [ready, setReady] = useState(false)
  const history = useHistory();

  const isAuthenticated = () => {
    const authorizationCode = new URL(window.location.href).searchParams.get('code')

    if(!authorizationCode){
      axios
       .get(
         'https://localhost:4000/auth',
         { withCredentials: true }
       )
       .then((res)=>{
         setIsLogin(true);
         setUserinfo(res.data.data.userInfo)
         history.push('/');
       })
    } else {
      axios
          .post('https://localhost:4000/kakaologin', 
          {
            authorizationCode: authorizationCode
          },
          { withCredentials: true })
          .then((res) => {
            console.log(res)
            setReady(true)
        setTimeout(()=>{
          setReady(false)
        },3000)
            setIsLogin(true);
            setUserinfo(res.data.userInfo)
          })
          }
  };

  const handleLogout = () => {
    axios
      .post('https://localhost:4000/logout', 
      {},
      { withCredentials: true })
      .then(() => {
        setReady(true)
        setTimeout(()=>{
          setReady(false)
        },1000)
        setUserinfo(null);
        setIsLogin(false);
        history.push('/');
      });
  };

  const handleResponseSuccess = () => {
    isAuthenticated();
  };

  useEffect(() => {
    isAuthenticated();
    console.log(userinfo)
  }, []);

  return ready ? <Loading/> : (
    
    <div >
      <Switch>
        <Route exact path = '/'>
          <LandingPage userinfo={userinfo} isLogin={isLogin} handleLogout={handleLogout} />
        </Route>

        <Route path = '/login'>
          <LoginPage handleResponseSuccess={handleResponseSuccess} />
        </Route>

        <Route path = '/signup'>
          <SignUp/>
        </Route>
        <Route path = '/heal'>
          <Heal/>
        </Route>
        <Route path = '/board'>
          <Board/>
        </Route>
        <Route path = '/edit'>
          
        </Route>
        <Route path = '/favorite'>
          
        </Route>
        <Route path = '/written'>
          
        </Route>
      </Switch>
    </div>
  );
}

export default App;
