import React from 'react';
import './App.scss';
import { UserContext } from './components/Context';
import Home from './components/base/Home';

function App() {
  return (
    <div className="App">
      <UserContext.Provider value="my new context dataset">
        <Home />
      </UserContext.Provider>
    </div>
  );
}

export default App;
