import React, { useState } from 'react';
import UrlForm from './components/UrlForm';
import UrlResult from './components/UrlResult';
import './App.css';

function App() {
  const [shortURL, setShortURL] = useState("");

  const saveNewURL = (orignalUrl, shortBaseUrl) => {
    const requestData = {
      orignalUrl,
      shortBaseUrl
    }
    fetch('http://localhost:3001/', {
        method: "POST",
        headers: {
            'Accept': 'application/json,  text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      })
      .then(res => {
        if(res.status === 200){
          res.text().then(data => {
            const updatedURL = JSON.parse(data).shortURL
            console.log(data)
            setShortURL(updatedURL);
          })
        }
      })
      .catch(err => {
        console.log(err)
      });
  }
  return (
    <div>
      <UrlForm saveNewURL={saveNewURL}/>
      <UrlResult shortURL={shortURL}/>
    </div>
  );
}

export default App;
