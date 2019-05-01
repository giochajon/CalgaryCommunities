import React from 'react';
import './App.css';
//import Map from './components/Map.js'
import CommunityController from './components/communityController.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h3>Compare Calgary residential communities:</h3>
        <CommunityController />
      </header>
    	
        
    </div>
  );
}


export default App;
