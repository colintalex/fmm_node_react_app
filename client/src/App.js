import React from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import './App.css';
import MainMap from './components/MainMap/MainMap';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn'

const App = () => {

  return (
        <Switch>
          <Route path="/main_map">
            <MainMap />
          </Route>
          <Route path='/login'>
            <SignIn />
          </Route>
          <Route exact path="/"> {/*Adding the exact path nullifies the default value route, but prevents displaying components that match route*/}
            <Home />
          </Route>
        </Switch>
  );
}

export default App;
