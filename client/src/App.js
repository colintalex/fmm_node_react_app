import React, { useEffect, useState } from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import axios from 'axios';
import './App.css';
import MainMap from './components/MainMap/MainMap';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'

const App = () => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('currentUser')) || '');

  // var headers = {
  //     'Content-Type': 'application/json',
  //     'x-auth-token': data.currentUser.token
  // }
  useEffect(() => {
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
  }, [currentUser]);

  const handleAuthentication = (data) => {
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
      if(data.action === 'add') {
        var headers = {
            'Content-Type': 'application/json',
            'x-auth-token': data.user.token
        }
        axios.post(`http://localhost:5000/users/${data.user.user.id}/favorites/${data.market.fmid}`, data.market, {headers: headers})
        .then(res => {
          setCurrentUser(res.data)
        })
        .catch(err => {
            console.log(err)
        })
      }

      if(data.action === 'remove') {
        var headers = {
          'Content-Type': 'application/json',
          'x-auth-token': data.user.token
        }
        axios.delete(`http://localhost:5000/users/${data.user.user.id}/favorites/${data.market.fmid}`, {headers: headers})
        .then(res => {
          setCurrentUser(res.data)
        })
        .catch(err => {
            console.log(err)
        })
      }
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

    const handleUserLogging = (data) => {
      if(data.action === 'logout'){
        setCurrentUser({});
      }
    };

  return (
        <Switch>
          <Route path="/main_map">
            <MainMap 
              currentUser={currentUser}
              handleUserFavorites={handleUserFavorites}
              handleUserLogging={handleUserLogging}
            />
          </Route>
          <Route path='/login'>
            <SignIn 
              currentUser={currentUser}
              handleAuthentication={handleAuthentication}
            />
          </Route>
          <Route path='/register'>
            <Register 
              currentUser={currentUser}
              handleUserRegister={handleUserRegister}
            />
          </Route>
          <Route exact path="/"> {/*Adding the exact path nullifies the default value route, but prevents displaying components that match route*/}
            <Home 
              handleAuthentication={handleAuthentication}
              currentUser={currentUser}
            />
          </Route>
        </Switch>
  );
}

export default App;
