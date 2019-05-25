import React from 'react'
import CommunityController from './communityController.js'

class GraphController extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        city1:null,
        city2:null
        }
   
    }

    myCallback1 = (citycode) => { 
        this.setState({ city1: citycode });
    }

    myCallback2 = (citycode) => { 
        
        this.setState({ city2: citycode });
    }

        render() {
        
          
    
    
            return (
                <div className="App-header">
                    
                <CommunityController callbackFromParent={this.myCallback1} />
        
                <CommunityController callbackFromParent={this.myCallback2}/>
    
                
    
                <div className="bor3">
                <p> {this.state.city1} VS {this.state.city2} </p>
                </div>
                </div>
            );
        }
    }
 

    export default GraphController;