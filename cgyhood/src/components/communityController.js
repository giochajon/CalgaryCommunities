import React from 'react'
import Map from "./Map"
import Dropdown from 'react-bootstrap/Dropdown'
import defaultData from "./cincuenta.json";
import dropmenu from "../form/ddrop.jsx"
class CommunityController extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comm: null
        };
        this.comName = this.props.comName
        this.cityData = defaultData
        this.sector = null
        this.dwell_cnt = null
        this.comm_structure = null
        this.gcoord = null
        this.gcenter = { lat: 50.92164717948156, lng: -114.01304620099702 }
        this.drp = dropmenu
    }



    onClickHandler = event => {
        const value = event.target.innerHTML;
        let coord
        let center
        for (var i = 0; i < this.cityData.length; i++) {
            // look for the entry with a matching `code` value
            if (this.cityData[i].name == value) {
                console.log("sector" + this.cityData[i].sector + " res_cnt ", this.cityData[i].res_cnt)
                this.sector = this.cityData[i].sector
                this.res_cnt = this.cityData[i].res_cnt
                this.dwell_cnt = this.cityData[i].dwell_cnt
                this.comm_structure = this.cityData[i].comm_structure
                coord = this.cityData[i].gcoord

                center = this.cityData[i].gcenter
            }

        }

        this.gcoord = JSON.parse(coord)
        this.gcenter = JSON.parse(center)
        //this.gcenter = (center)
        //this.gcoord = (coord)
        this.setState({ comm: value });
        //console.log("center",this.gcenter)
        //console.log("coord",this.gcoord)

    }

    render() {


        return (

            <div className = "bor3">
        <div className = "bor3">  

        <Dropdown  >
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Select Community
  </Dropdown.Toggle>

  <Dropdown.Menu>
     <Dropdown.Item  onClick={this.onClickHandler}>ABBEYDALE</Dropdown.Item> 
     <Dropdown.Item  onClick={this.onClickHandler}>ACADIA</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>ALBERT PARK/RADISSON HEIGHTS</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>ALTADORE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>APPLEWOOD PARK</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>ARBOUR LAKE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>ASPEN WOODS</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>AUBURN BAY</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>BANFF TRAIL</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>BANKVIEW</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>BAYVIEW</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>BEDDINGTON HEIGHTS</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>BEL-AIRE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>BELMONT</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>BELTLINE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>BELVEDERE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>BONAVISTA DOWNS</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>BOWNESS</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>BRAESIDE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>BRENTWOOD</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>BRIDGELAND/RIVERSIDE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>BRIDLEWOOD</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>BRITANNIA</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>CAMBRIAN HEIGHTS</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>CANYON MEADOWS</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>CAPITOL HILL</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>CARRINGTON</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>CASTLERIDGE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>CEDARBRAE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>CHAPARRAL</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>CHARLESWOOD</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>CHINATOWN</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>CHINOOK PARK</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>CHRISTIE PARK</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>CITADEL</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>CITYSCAPE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>CLIFF BUNGALOW</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>COACH HILL</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>COLLINGWOOD</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>COPPERFIELD</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>CORAL SPRINGS</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>CORNERSTONE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>COUGAR RIDGE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>COUNTRY HILLS</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>COUNTRY HILLS VILLAGE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>COVENTRY HILLS</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>CRANSTON</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>CRESCENT HEIGHTS</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>CRESTMONT</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>CURRIE BARRACKS</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>DALHOUSIE</Dropdown.Item> 
  </Dropdown.Menu>
</Dropdown>
        <p> {this.state.comm}</p> 
        <Map centre = {this.gcenter} flightpath ={this.gcoord}/>
          <p>Sector in the city: {this.sector}</p>
          <p>Number of residents: {this.res_cnt} </p>
          <p>Number of dwellings: {this.dwell_cnt} </p>
          <p>Build around: {this.comm_structure} </p>
        </div>



        </div>
        );
    }
}

export default CommunityController;