import React from 'react'
import CommunityController from './communityController.js'
import Chart from './Chart'
import IosRefresh from 'react-ionicons/lib/IosRefresh'
import IosInformationCircleOutline from 'react-ionicons/lib/IosInformationCircleOutline'
import About from './About'


class GraphController extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        city1:null,
        city2:null,
         data1:{"comm_code":"ALT","name":"ALTADORE","res_cnt":"6831","dwell_cnt":"3218","prsch_chld":"677","ownshp_cnt":"1945","hotel_cnt":"2"},
         data2:{"comm_code":"SNA","name":"SUNALTA","res_cnt":"3268","dwell_cnt":"2172","prsch_chld":"150","ownshp_cnt":"469","hotel_cnt":"1"}
        }
        this.toggle = 0
        this.showAbout = false
    }


    populateCompData(comm1,comm2) {
      this.toggle= 0
        let linka = "https://cgy-node-knex.herokuapp.com/compare/"+comm1+"/"+comm2
        fetch(linka, {
                method: 'GET',
                mode: 'cors',
                dataType: 'json'
            })
            .then(r => r.json())
            .then(r => {
               this.setState({ data1: r[0] })
               this.setState({ data2: r[1] })
               
               this.displayGraph()
            })
            .catch(err => { 
                console.log('err:',err)
                alert('Sorry, no data available for this communities at this time')
            })

    }

    myCallback1 = (citycode) => { 
        this.setState({ city1: citycode });
        this.toggle++
        
    }

    myCallback2 = (citycode) => { 
        this.setState({ city2: citycode });
        this.toggle++
    }

    displayGraph = () => {
      let a = []
      a.push (<div className="App">
      <Chart key={this.state.data1.name} key={this.state.data2.name} tit="Population" lb1={this.state.data1.name} lb2 ={this.state.data2.name} val1={this.state.data1.res_cnt} val2={this.state.data2.res_cnt} mtitle="Population" legendPosition="bottom"/>
      </div>)

    a.push (<div className="App">
    <Chart key={this.state.data1.name} key={this.state.data2.name} tit="Population" lb1={this.state.data1.name} lb2 ={this.state.data2.name} val1={this.state.data1.dwell_cnt} val2={this.state.data2.dwell_cnt} mtitle="Dwellings" legendPosition="bottom"/>
    </div>)

a.push (<div className="App">
    <Chart key={this.state.data1.name} key={this.state.data2.name} tit="Population" lb1={this.state.data1.name} lb2 ={this.state.data2.name} val1={this.state.data1.ownshp_cnt} val2={this.state.data2.ownshp_cnt} mtitle="Home Owners" legendPosition="bottom"/>
    </div>)

a.push (<div className="App">
    <Chart key={this.state.data1.name} key={this.state.data2.name} tit="Population" lb1={this.state.data1.name} lb2 ={this.state.data2.name} val1={this.state.data1.prsch_chld} val2={this.state.data2.prsch_chld} mtitle="Pre-school Children" legendPosition="bottom"/>
    </div>)

    return a 
    } 

    aboutWindow=()=>{
        this.showAbout = !this.showAbout
        //console.log (this.showAbout)
        this.forceUpdate();
        return <about />
    }   


        render() {
            let info = null
            let comms = null 
            if (this.showAbout === true) {comms = null; info = <About/>  } 
            else {

comms =      (    <div className="App-header">       <CommunityController callbackFromParent={this.myCallback1} />
        <CommunityController callbackFromParent={this.myCallback2}/> </div> );



            if (this.toggle>=2) {
                info = <IosRefresh onClick={() => {
                this.populateCompData(this.state.city1,this.state.city2)
             } 
             } fontSize="60px" color="#347eff" rotate={true} />
  
            }
             
            else {info = this.displayGraph()}
        }
             
            
    
    
            return (
                <div >
                
                   
                {comms}
    
                
    
                <div className="bor3">
               <p className="descrip"> <IosInformationCircleOutline onClick={() => {this.aboutWindow() }} shake={true} fontSize="20px" color="Blue" /> </p>
                <p> {this.state.city1} VS {this.state.city2} </p>
                {info}
                
                
                
                </div>
                </div>
            );
        }
    }
 

    export default GraphController;