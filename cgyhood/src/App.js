import React from 'react';
import './App.css';
//import Map from './components/Map.js'
import CommunityController from './components/communityController.js'
//import HttpsRedirect from 'react-https-redirect'

import Particles from 'react-particles-js'

const particlesOptions = {
                    "particles": {
                      "color": {
                                "value": "#11aa00"
                                  },
                        "line_linked": {
                                    "color":"#11aa00"
                                    },
                        "number": {
                            "value": 150
                        },
                        "size": {
                            "value": 5
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }




function App() {
  return (
      
    <div className="App">
<Particles className='particles' params={particlesOptions}  / >
      
      <h3>Compare Calgary residential communities:</h3>
      <header className="App-header">
        <CommunityController />
        
        <CommunityController />
      </header>
    	
        
    </div>
  );
}


export default App;
