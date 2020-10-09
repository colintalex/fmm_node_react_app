import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-intro">{apiResponse}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
