import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import defaultData from "../offlineData/offlineCommunities.json";
import defaultDrop from "../offlineData/offlineCommunityName.json"
import Smap from "./Smap"
import Compass from "./compass"

class CommunityController extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comm: "Community Information:",
            dropList: []
        };
        this.comName = this.props.comName
        this.cityData = null
        this.sector = null
        this.res_cnt = 0
        this.dwell_cnt = 0
        this.comm_structure = null
        this.gcoord = []
        this.gcenter = { lat: 51.044270, lng: -114.062019 } //calgary tower center
    }




    componentWillMount() {

        this.populateDropdown()
        //this.populateData('ALTADORE')
    }


    populateDropdown() {
        fetch('https://cgyflask-api-heroku.herokuapp.com/community/', {
                //fetch('http://127.0.0.1:5000/community/', {
                method: 'GET',
                mode: 'cors',
                dataType: 'json'
            })
            .then(r => r.json())
            .then(r => {
                this.setState({ dropList: r })
            })
            .catch(err => { //console.log(err)
                this.setState({ dropList: defaultDrop })
                console.log('default loaded')
            })

    }


    async populateData(comm) {
        await fetch('https://cgyflask-api-heroku.herokuapp.com/community/' + comm + "/", {
                //await fetch('http://localhost:5000/community/' + comm + "/", {
                method: 'GET',
                mode: 'cors',
                dataType: 'json'
            })
            .then(r => r.json())
            .then(r => {
                this.cityData = r
                //console.log("hey", r)
                return true

            })
            .catch(err => { //console.log(err)
                this.cityData = defaultData
                console.log('default loaded')
                return false
            })

    }


    dropdwn = () => {
        let content = this.state.dropList
        let ite = []
        content.forEach((element) => { ite.push(<Dropdown.Item key={element} onClick={this.onClickHandler}>{element}</Dropdown.Item>) })

        return (
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">Select Community</Dropdown.Toggle>
            <Dropdown.Menu> 
                            {ite}   
            </Dropdown.Menu>
        </Dropdown>)

    }
    getLocal = (value) => {

        this.cityData = defaultData

        let coord
        let center
        for (var i = 0; i < this.cityData.length; i++) {
            // look for the entry with a matching `code` value
            if (this.cityData[i].name === value) {

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
    }


    setObtainedValues() {
        let coord
        let center

        this.sector = this.cityData[0].sector
        this.res_cnt = this.cityData[0].res_cnt
        this.dwell_cnt = this.cityData[0].dwell_cnt
        this.comm_structure = this.cityData[0].comm_structure
        coord = this.cityData[0].gcoord
        center = this.cityData[0].gcenter

        this.gcoord = JSON.parse(coord)
        this.gcenter = JSON.parse(center)

    }




    onClickHandler = event => {
        const value = event.target.innerHTML;



        let p1 = new Promise(
            (resolve, reject) => {
                this.populateData(value)
            });
        p1.then(
            function(val) {
                this.setObtainedValues()
                this.setState({ comm: value });
                console.log(val)
            }).catch(
            (reason) => {
                this.getLocal(value)
                this.setState({ comm: value });
                console.log(reason)
            });


        this.props.callbackFromParent(value)
        this.getLocal(value)




        /*
                let promise3 = new Promise(resolve, reject) => {
                    if (this.populateData(value)) {
                       
                    } else {
                        this.getLocal(value)
                    }
                });
        */
        //console.log("pst", this.cityData)
        this.setState({ comm: value });
    }





    render() {


        let theSector;
        switch (this.sector) {
            case "SOUTHEAST":
                theSector = "SE"
                break;
            case "SOUTHWEST":
                theSector = "SW"
                break;
            case "SOUTH":
                theSector = "S"
                break;
            case "NORTHEAST":
                theSector = "NE"
                break;
            case "NORTHWEST":
                theSector = "NW"
                break;
            case "CENTRE":
                theSector = "CENTRE"
                break;
            case "NORTH":
                theSector = "N"
                break;
            case "EAST":
                theSector = "E"
                break;
            case "WEST":
                theSector = "W"
                break;
            default:
                theSector = null

        }






        return (






            <div className="container">
                <div className="bor3">

                    <br />
                    {this.dropdwn()}
                    <br/>

                    <u> {this.state.comm} </u><Compass cardinal={theSector} imgheight="40" imgwidth="40"/>
                    
                    {/* <p>Number of residents: {this.res_cnt.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} </p> */}
                    {/* <p>Number of dwellings: {this.dwell_cnt.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} </p> */}
                    <p>Built around: {this.comm_structure} </p>
                    <div className = "mapborder">
                    <Smap isMarkerShown centre={this.gcenter} flightpath={this.gcoord} />
                    </div>
                </div>



            </div>
        );
    }
}

export default CommunityController;