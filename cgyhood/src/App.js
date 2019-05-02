import React from 'react';
import './App.css';
//import Map from './components/Map.js'
import CommunityController from './components/communityController.js'

function App() {
  return (
    <div className="App">
      <h3>Compare Calgary residential communities:</h3>
      <header className="App-header">
        
        
        <CommunityController />
        <div> <img src={require('./dblarrow.png')} width="100" height="50"/> </div>
        <CommunityController />
      </header>
    	
        
    </div>
  );
}


export default App;
