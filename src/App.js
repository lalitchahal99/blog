import React, { useEffect } from 'react';
import './App.scss';
import { UserContext } from './components/Context';
import Home from './components/base/Home';

function App() {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.fadeOut').style.transform = 'translateY(-200%)';
    }, 1200)
  }, [])
  return (
    <div className="App">
      <div className="fadeOut h-100 w-100 position-fixed bg-dark"></div>
      <UserContext.Provider value="my new context dataset">
        <Home />
        
      </UserContext.Provider>
    </div>
  );
}

export default App;
