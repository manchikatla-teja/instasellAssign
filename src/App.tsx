import React from 'react';
import { Bottom } from './Bottom/Bottom';
import { Center } from './Center/Center';
import { Intro } from './Intro/Intro';
import { NavBar } from './NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <div className="mainPage" style={{width:"1280px", height:"1688px", backgroundColor:"#fffdfa"}}>
        <NavBar></NavBar>
        <Intro></Intro>
        <Center></Center>
        <Bottom></Bottom>
      </div>
    </div>
  );
}

export default App;
