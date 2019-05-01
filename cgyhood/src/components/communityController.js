import React from 'react'
import Map from "./Map"
import Dropdown from 'react-bootstrap/Dropdown'
import defaultData from "./calgarycom.json";

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
        this.gcenter = {lat:50.92164717948156, lng:-114.01304620099702}
    }



  onClickHandler = event => {
    const value = event.target.innerHTML;
    let coord 
    let center
    for (var i = 0; i < this.cityData.length; i++){
  // look for the entry with a matching `code` value
  if (this.cityData[i].name == value){
     console.log("sector"+ this.cityData[i].sector+" res_cnt ",this.cityData[i].res_cnt  )
    this.sector = this.cityData[i].sector
    this.res_cnt = this.cityData[i].res_cnt
    this.dwell_cnt = this.cityData[i].dwell_cnt
    this.comm_structure = this.cityData[i].comm_structure
    coord = this.cityData[i].gcoord

    center = this.cityData[i].gcenter
  }
  
}

    //this.gcoord = JSON.parse(coord)
    this.gcenter = (center)
    this.gcoord = (coord)
    this.setState({ comm: value });
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
    <Dropdown.Item  onClick={this.onClickHandler}>DEER RIDGE</Dropdown.Item>
    <Dropdown.Item  onClick={this.onClickHandler}>DEER RUN</Dropdown.Item>
    <Dropdown.Item  onClick={this.onClickHandler}>PARKLAND</Dropdown.Item>
    <Dropdown.Item  onClick={this.onClickHandler}>QUEENSLAND</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        <p> {this.state.comm}</p> 
        <Map centre = {this.gcenter} flightpath ={this.gcoord}/>
          <p>Sector in the city: {this.sector}</p>
          <p>Number of residents: {this.res_cnt} </p>
          <p>Number of dwellings: {this.dwell_cnt} </p>
          <p>Build around: {this.comm_structure} </p>
        </div>

        <div className = "bor3">  <p> QUEENSLAND </p> 

        <Map centre = {{lat:50.93997822491931, lng:-114.02503294800867}} flightpath = {[{lat:50.943017867576, lng:-114.018507740242},{lat:50.940101857781, lng:-114.0152315008},{lat:50.940031751833, lng:-114.015114248652},{lat:50.939802295137, lng:-114.014730459895},{lat:50.938830131851, lng:-114.013104381975},{lat:50.938301818068, lng:-114.013104288973},{lat:50.933308170525, lng:-114.013103412021},{lat:50.933029169765, lng:-114.013014389921},{lat:50.932869233328, lng:-114.012963332292},{lat:50.932032096981, lng:-114.0174193968},{lat:50.931865484114, lng:-114.01833684023},{lat:50.931800499614, lng:-114.018817521958},{lat:50.931756014592, lng:-114.019276604302},{lat:50.931735424465, lng:-114.019827517892},{lat:50.931784364219, lng:-114.023019876602},{lat:50.931839380124, lng:-114.027133527628},{lat:50.931839321989, lng:-114.027382594909},{lat:50.931808742667, lng:-114.027760195124},{lat:50.931767998135, lng:-114.02813778871},{lat:50.931274249307, lng:-114.031375323838},{lat:50.931148665258, lng:-114.032326126152},{lat:50.932218874631, lng:-114.032628733595},{lat:50.932899080972, lng:-114.032807295612},{lat:50.933676335244, lng:-114.032952396461},{lat:50.93445284257, lng:-114.033054822423},{lat:50.934965158364, lng:-114.033070466847},{lat:50.935393348311, lng:-114.033041974756},{lat:50.935866062187, lng:-114.032985979562},{lat:50.936160623955, lng:-114.032927041815},{lat:50.936427873304, lng:-114.032855879742},{lat:50.936942616193, lng:-114.032685858004},{lat:50.937424023881, lng:-114.032488063671},{lat:50.937808968203, lng:-114.032285496129},{lat:50.937885505843, lng:-114.032245220083},{lat:50.938514240312, lng:-114.03184599858},{lat:50.939095311612, lng:-114.03140668437},{lat:50.93950723773, lng:-114.031043279256},{lat:50.939944537399, lng:-114.030581109821},{lat:50.940504529658, lng:-114.029984744501},{lat:50.941171919047, lng:-114.029231683876},{lat:50.940775745942, lng:-114.028471825069},{lat:50.940999518176, lng:-114.028185261338},{lat:50.94120329089, lng:-114.027435263565},{lat:50.9413516598, lng:-114.027213644877},{lat:50.941475890876, lng:-114.027036704148},{lat:50.941602476959, lng:-114.026863992708},{lat:50.941690302356, lng:-114.02674850174},{lat:50.941814397056, lng:-114.026590939894},{lat:50.941940481896, lng:-114.026437385269},{lat:50.942051021169, lng:-114.026307962299},{lat:50.942162979108, lng:-114.026181630099},{lat:50.942278574063, lng:-114.026055999406},{lat:50.942395569672, lng:-114.025933661528},{lat:50.942516974623, lng:-114.025811641369},{lat:50.942639772097, lng:-114.025693163033},{lat:50.942765382789, lng:-114.02557694667},{lat:50.942892332948, lng:-114.025464434338},{lat:50.943021985699, lng:-114.025354484171},{lat:50.943152919466, lng:-114.025248405942},{lat:50.943152946437, lng:-114.025248401687},{lat:50.943226652597, lng:-114.025190823307},{lat:50.943360252321, lng:-114.025090283744},{lat:50.943448526945, lng:-114.025026515681},{lat:50.943523049928, lng:-114.024974291636},{lat:50.943606677043, lng:-114.024917407807},{lat:50.943873881414, lng:-114.024741293844},{lat:50.943949407003, lng:-114.024691586645},{lat:50.944186772998, lng:-114.02453535484},{lat:50.944398406177, lng:-114.024396055808},{lat:50.944535349959, lng:-114.024305923817},{lat:50.944564242166, lng:-114.024286216158},{lat:50.944713909474, lng:-114.024160250435},{lat:50.944828946323, lng:-114.024031727408},{lat:50.944917627146, lng:-114.02390871719},{lat:50.94500991617, lng:-114.023751389622},{lat:50.945079817113, lng:-114.023604701342},{lat:50.945154522306, lng:-114.023407530769},{lat:50.945196666351, lng:-114.023266292046},{lat:50.945237620517, lng:-114.023090457521},{lat:50.945278556515, lng:-114.02281780339},{lat:50.945293173664, lng:-114.022597958489},{lat:50.945289903644, lng:-114.02233363839},{lat:50.945261653597, lng:-114.022055718109},{lat:50.945208991396, lng:-114.021789333109},{lat:50.945146957294, lng:-114.021577808682},{lat:50.945069180995, lng:-114.02137895521},{lat:50.944980803809, lng:-114.021203069216},{lat:50.944871118604, lng:-114.021031737855},{lat:50.943121942926, lng:-114.018624691299},{lat:50.943017867576, lng:-114.018507740242}]}/>
        </div>

        </div>
        );
    }
}

export default CommunityController;