import React, { useEffect, useState } from 'react';
import { BrowserRouter as Switch, Redirect, Route, useHistory } from "react-router-dom";
import axios from 'axios';
import './App.css';
import MainMap from './components/MainMap/MainMap';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'

const App = () => {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('currentUser')) || '');

  // var headers = {
  //     'Content-Type': 'application/json',
  //     'x-auth-token': data.currentUser.token
  // }
  useEffect(() => {
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
  }, [currentUser]);

  const handleSignIn = (data) => {
      axios.post('http://localhost:5000/auth', data)
      .then(res => {
      setCurrentUser(res.data)
      })
      .catch(err => {
          console.log(err)
      })
  }

    const handleUserFavorites = (data) => {
      // data.market
      var headers = {
          'Content-Type': 'application/json',
          'x-auth-token': data.user.token
      }
      axios.post(`http://localhost:5000/users/${data.user.user.id}/favorites/${data.market.market.fmid}`, data.market.market, {headers: headers})
      .then(res => {
          setCurrentUser(res.data)
      })
      .catch(err => {
          console.log(err)
      })
    }

    const handleUserRegister = (data) => {
      axios.post('http://localhost:5000/users/register', data)
      .then((res) => {
          setCurrentUser(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
    }

  return (
        <Switch>
          <Route path="/main_map">
            <MainMap 
              currentUser={currentUser}
              handleUserFavorites={handleUserFavorites}
            />
          </Route>
          <Route path='/login'>
            <SignIn 
              currentUser={currentUser}
              handleSignIn={handleSignIn}
            />
          </Route>
          <Route path='/register'>
            <Register 
              currentUser={currentUser}
              handleUserRegister={handleUserRegister}
            />
          </Route>
          <Route exact path="/"> {/*Adding the exact path nullifies the default value route, but prevents displaying components that match route*/}
            <Home />
          </Route>
        </Switch>
  );
}

export default App;
