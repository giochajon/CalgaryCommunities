import React from 'react'
import Map from "./Map"
import Dropdown from 'react-bootstrap/Dropdown'
import defaultData from "../offlineData/offlineCommunities.json";
import defaultDrop from "../offlineData/offlineCommunityName.json"

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
        this.dwell_cnt = null
        this.comm_structure = null
        this.gcoord = null
        this.gcenter = { lat: 51.044270, lng: -114.062019 } //calgary tower
    }




    componentWillMount() {

        this.populateDropdown()
        this.populateData('ALTADORE')
   }


    populateDropdown() {
        fetch('http://localhost:5000/community', {
                method: 'GET',
                mode: 'cors',
                dataType: 'json'
            })
            .then(r => r.json())
            .then(r => {
                this.setState({ dropList: r })
            })
            .catch(err => {console.log(err)
                this.setState({ dropList: defaultDrop })  
                console.log('default loaded')     })

    }


    populateData(comm) {
        fetch('http://localhost:5000/community/' + comm, {
                method: 'GET',
                mode: 'cors',
                dataType: 'json'
            })
            .then(r => r.json())
            .then(r => {
                this.cityData = r
            })
            .catch(err => {console.log(err)
                           this.cityData = defaultData 
                           console.log('default loaded') })

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


    onClickHandler = event => {
        const value = event.target.innerHTML;
        this.populateData(value)
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
        this.setState({ comm: value });

    }


    render() {


        return (

            <div className="container">
                <div className="bor3">

                    <br />
                    {this.dropdwn()}
                    <br/>

                    <u> {this.state.comm}</u>
                    <p>Area in the city: {this.sector}</p>
                    <p>Number of residents: {this.res_cnt} </p>
                    <p>Number of dwellings: {this.dwell_cnt} </p>
                    <p>Build around: {this.comm_structure} </p>
                    <div className = "mapborder">
                    <Map centre={this.gcenter} flightpath={this.gcoord} />
                    </div>
                </div>



            </div>
        );
    }
}

export default CommunityController;