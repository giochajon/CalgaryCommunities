import React from 'react'
import C from './cimages/C.svg';
import E from './cimages/E.svg';
import N from './cimages/N.svg';
import NE from './cimages/NE.svg';
import NW from './cimages/NW.svg';
import S from './cimages/S.svg';
import SE from './cimages/SE.svg';
import SW from './cimages/SW.svg';
import W from './cimages/W.svg';


class Compass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

    }



    render() {

        let imgwidth = this.props.imgwidth
        let imgheight = this.props.imgheight

        //console.log(this.props.cardinal)
        let cardinal;
        switch (this.props.cardinal) {
            case "C" || "Centre" || "Center" || "CENTER":
                cardinal = <img src={C} width={imgwidth} height={imgheight} alt="Center" />;
                break;
            case "E" || "East" || "EAST":
                cardinal = <img src={E} width={imgwidth} height={imgheight} alt="E" />;
                break;
            case "N" || "North" || "NORTH":
                cardinal = <img src={N} width={imgwidth} height={imgheight} alt="N" />;
                break;
            case "NE" || "NORTHEAST":
                cardinal = <img src={NE} width={imgwidth} height={imgheight} alt="NE" />;
                break;
            case "NW" || "NORTHWEST":
                cardinal = <img src={NW} width={imgwidth} height={imgheight} alt="NW" />;
                break;
            case "S" || "SOUTH":
                cardinal = <img src={S} width={imgwidth} height={imgheight} alt="S" />;
                break;
            case "SW" || "SOUTHWEST":
                cardinal = <img src={SW} width={imgwidth} height={imgheight} alt="SW" />;
                break;
            case "SE" || "SOUTHEAST":
                cardinal = <img src={SE} width={imgwidth} height={imgheight} alt="SE" />;
                break;
            case "W" || "WEST":
                cardinal = <img src={W} width={imgwidth} height={imgheight} alt="West" />;
                break;
            default:
                cardinal = <img src={C} width={imgwidth} height={imgheight} alt="Center" />;

        }

        return (


            <div style={{display : 'inline-block'}} >  {cardinal} </div>

        );
    }
}

export default Compass;