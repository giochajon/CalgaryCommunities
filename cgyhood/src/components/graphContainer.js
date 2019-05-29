import React from 'react'
import CommunityController from './communityController.js'
import Chart from './Chart'


class GraphController extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        city1:null,
        city2:null,
        // data1:null,
        // data2:null
        chartData : { 
            labels: ["data1.name", "data2.name"],
            datasets:[
              {
                label:'',
                data:[
                  0,
                  0,
                ],
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                ]
              }
            ]
          }
        }
        
        //this.data1 = null
        //this.data2 = null   
    }

    // componentWillMount(){
    //     this.getChartData();
    //   }

    getChartData = (data1, data2) =>{
        // Ajax calls here
        console.log ('data1',data1.name)
        console.log ('data2',data2.name)
        this.setState({
          chartData : { 
            labels: [data1.name, data2.name],
            datasets:[
              {
                label:'',
                data:[
                  617594,
                  181045,
                ],
                backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                ]
              }
            ]
          }
        })
        console.log ("state chartdata",this.state.chartData)
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
               this.getChartData(r[0], r[1])
            })
            .catch(err => { //console.log(err)
                //this.setState({ dropList: defaultDrop })
                console.log('err:',err)
                alert('Sorry, no data available for this communities at this time')
            })

    }

    myCallback1 = (citycode) => { 
        this.setState({ city1: citycode });
        // this.populateCompData_1(this.state.city1);
        // console.log (this.state.data1)
    }

    myCallback2 = (citycode) => { 
        this.setState({ city2: citycode });
    }

    displayGraph = () => {
        return(
            <div className="App">
                    <Chart chartData={this.state.chartData} location="Calgary" legendPosition="bottom"/>
            </div>
        )
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
                <button onClick={() => {
                   this.populateCompData(this.state.city1,this.state.city2)
                } 
                } > GET DATA</button>

                {/* {this.displayGraph()} */}
                <Chart chartData={this.state.chartData} location="Calgary" legendPosition="bottom"/>
                
                {info}
                </div>
                </div>
            );
        }
    }
 

    export default GraphController;