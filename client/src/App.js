import React, { useEffect, useState } from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import axios from 'axios'
import './App.css';
import MainMap from './components/MainMap/MainMap';
import Home from './components/Home/Home';

const App = () => {
  const [apiResponse, setApiResponse] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/testAPI")
      .then(resp => {
        setApiResponse(resp.data);
        console.log(resp)
        console.log(apiResponse);
      })
      .catch(err => console.log(err))
  }, [apiResponse.length]);
  
  return (
    <div>
      <Switch>
        <Route path="/main_map">
          <MainMap />
        </Route>
        <Route exact path="/"> {/*Adding the exact path nullifies the default value route, but prevents displaying components that match route*/}
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
