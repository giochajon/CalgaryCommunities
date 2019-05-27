import React from 'react'
import CommunityController from './communityController.js'

class GraphController extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        city1:null,
        city2:null,
        data1:null,
        data2:null
        }
        //this.data1 = null
        //this.data2 = null
   
    }


    populateCompData(comm1,comm2) {
        let linka = "https://cgy-node-knex.herokuapp.com/compare/"+comm1+"/"+comm2
        fetch(linka, {
        //fetch('http://127.0.0.1:5000/community/', {
                method: 'GET',
                mode: 'cors',
                dataType: 'json'
            })
            .then(r => r.json())
            .then(r => {
                //this.setState({ dropList: r })
                console.log(linka,r)
                //this.data1 = r[0]
                //this.data2 = r[1]
                this.setState({ data1: r[0] })
                this.setState({ data2: r[1] })
            })
            .catch(err => { //console.log(err)
                //this.setState({ dropList: defaultDrop })
                console.log('err:',err)
                alert('Sorry, no data available for this communities at this time')
            })

    }




    myCallback1 = (citycode) => { 
        this.setState({ city1: citycode });
    }

    myCallback2 = (citycode) => { 
        
        this.setState({ city2: citycode });
    }

        render() {
            let info = ""
            if (this.state.data1) {
            info =  JSON.stringify (this.state.data1) + "and" + JSON.stringify (this.state.data2)
            }
    
    
            return (
                <div className="App-header">
                    
                <CommunityController callbackFromParent={this.myCallback1} />
        
                <CommunityController callbackFromParent={this.myCallback2}/>
    
                
    
                <div className="bor3">
                <p> {this.state.city1} VS {this.state.city2} </p>
                <button onClick={() => {this.populateCompData(this.state.city1,this.state.city2)}
                } > GET DATA</button>
                
                {info}
                </div>
                </div>
            );
        }
    }
 

    export default GraphController;