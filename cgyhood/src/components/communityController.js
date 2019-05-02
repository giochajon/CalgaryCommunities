import React from 'react'
import Map from "./Map"
import Dropdown from 'react-bootstrap/Dropdown'
import defaultData from "./all.json";
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
 <Dropdown.Item  onClick={this.onClickHandler}>DEER RIDGE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>DEER RUN</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>DIAMOND COVE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>DISCOVERY RIDGE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>DOUGLASDALE/GLEN</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>DOVER</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>DOWNTOWN COMMERCIAL CORE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>DOWNTOWN EAST VILLAGE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>DOWNTOWN WEST END</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>EAGLE RIDGE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>EAU CLAIRE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>EDGEMONT</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>ELBOW PARK</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>ELBOYA</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>ERIN WOODS</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>ERLTON</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>EVANSTON</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>EVERGREEN</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>FAIRVIEW</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>FALCONRIDGE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>FOREST HEIGHTS</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>FOREST LAWN</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>GARRISON GREEN</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>GARRISON WOODS</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>GLAMORGAN</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>GLENBROOK</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>GLENDALE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>GREENVIEW</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>GREENWOOD/GREENBRIAR</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>HAMPTONS</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>HARVEST HILLS</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>HAWKWOOD</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>HAYSBORO</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>HIDDEN VALLEY</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>HIGHLAND PARK</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>HIGHWOOD</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>HILLHURST</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>HOUNSFIELD HEIGHTS/BRIAR HILL</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>HUNTINGTON HILLS</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>INGLEWOOD</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>KELVIN GROVE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>KEYSTONE HILLS</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>KILLARNEY/GLENGARRY</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>KINCORA</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>KINGSLAND</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>LAKE BONAVISTA</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>LAKEVIEW</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>LEGACY</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>LINCOLN PARK</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>LIVINGSTON</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>LOWER MOUNT ROYAL</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>MACEWAN GLEN</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>MAHOGANY</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>MANCHESTER</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>MAPLE RIDGE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>MARLBOROUGH</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>MARLBOROUGH PARK</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>MARTINDALE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>MAYFAIR</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>MAYLAND HEIGHTS</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>MCKENZIE LAKE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>MCKENZIE TOWNE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>MEADOWLARK PARK</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>MEDICINE HILL</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>MIDNAPORE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>MILLRISE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>MISSION</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>MONTEREY PARK</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>MONTGOMERY</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>MOUNT PLEASANT</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>NEW BRIGHTON</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>NOLAN HILL</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>NORTH GLENMORE PARK</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>NORTH HAVEN</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>NORTH HAVEN UPPER</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>OAKRIDGE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>OGDEN</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>PALLISER</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>PANORAMA HILLS</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>PARKDALE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>PARKHILL</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>PARKLAND</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>PATTERSON</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>PENBROOKE MEADOWS</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>PINE CREEK</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>PINERIDGE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>POINT MCKAY</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>PUMP HILL</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>QUEENSLAND</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>QUEENS PARK VILLAGE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>RAMSAY</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>RANCHLANDS</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>RED CARPET</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>REDSTONE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>RENFREW</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>RICHMOND</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>RIDEAU PARK</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>RIVERBEND</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>ROCKY RIDGE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>ROSEDALE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>ROSEMONT</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>ROSSCARROCK</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>ROXBORO</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>ROYAL OAK</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>RUNDLE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>RUTLAND PARK</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>SADDLE RIDGE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>SAGE HILL</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>SANDSTONE VALLEY</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>SCARBORO</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>SCARBORO/ SUNALTA WEST</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>SCENIC ACRES</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>SETON</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>SHAGANAPPI</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>SHAWNEE SLOPES</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>SHAWNESSY</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>SHERWOOD</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>SIGNAL HILL</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>SILVERADO</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>SILVER SPRINGS</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>SKYVIEW RANCH</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>SOMERSET</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>SOUTH CALGARY</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>SOUTHVIEW</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>SOUTHWOOD</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>SPRINGBANK HILL</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>SPRUCE CLIFF</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>ST. ANDREWS HEIGHTS</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>STRATHCONA PARK</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>SUNALTA</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>SUNDANCE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>SUNNYSIDE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>TARADALE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>TEMPLE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>THORNCLIFFE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>TUSCANY</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>TUXEDO PARK</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>UNIVERSITY DISTRICT</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>UNIVERSITY HEIGHTS</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>UNIVERSITY OF CALGARY</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>UPPER MOUNT ROYAL</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>VALLEY RIDGE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>VARSITY</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>VISTA HEIGHTS</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>WALDEN</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>WESTGATE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>WEST HILLHURST</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>WEST SPRINGS</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>WHITEHORN</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>WILDWOOD</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>WILLOW PARK</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>WINDSOR PARK</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>WINSTON HEIGHTS/MOUNTVIEW</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>WOLF WILLOW</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>WOODBINE</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>WOODLANDS</Dropdown.Item> 
 <Dropdown.Item  onClick={this.onClickHandler}>YORKVILLE</Dropdown.Item> 
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