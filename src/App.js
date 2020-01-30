import React from 'react';
import Navigationbar from './components/Navbar/Navbar';
import ViewBox from "./components/View/View";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <ViewBox />
    </div>
  );
}

export default App;
