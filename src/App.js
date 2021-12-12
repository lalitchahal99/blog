import React, { useEffect, Component } from 'react';
import DeviceOrientation, { Orientation } from 'react-screen-orientation';
import './App.scss';
import Home from './components/base/Home';

function App() {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.fadeOut').style.transform = 'translateY(-200%)';
    }, 1200)
  }, [])
  return (
    <div className="App">
      <div className="fadeOut h-100 w-100 position-fixed bg-1"></div>
      <Home />
    </div>
  );
}

export default App;



// <DeviceOrientation lockOrientation={'portrait'}>
//       <Orientation orientation='portrait' alwaysRender={true}>
//         <div className="App">
//           <div className="fadeOut h-100 w-100 position-fixed bg-1"></div>
//           <ContactBtn.Provider value="my portfolio app">
//             <Home />

//           </ContactBtn.Provider>
//         </div>
//       </Orientation>
//     </DeviceOrientation>
