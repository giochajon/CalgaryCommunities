import React, {Component} from 'react';
import {HorizontalBar, Doughnut} from 'react-chartjs-2';
import './Chart.css';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:props.chartData
        }
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition:'right',
        location:'City',
    }

    ShowBarGraph = () => {
        return(
            <div className="chart">
                <p>test</p>
                <HorizontalBar
                    data={this.state.chartData}
                    width={100}
                    height={30}
                    options={{
                        maintainAspectRatio: true,
                        title:{ 
                            display:this.props.displayTitle,
                            text:'Largest Cities In '+this.props.location,
                            fontSize:15
                        },
                        legend:{
                            display: false,
                            // displayLegend:true,
                            // display:this.props.displayLegend,
                            // position:this.props.legendPosition
                        },
                    }}
                />
            </div>
        )
    }


    ShowDoughnutGraph = () => {
        return(
            <div>        
                <Doughnut
                    data={this.state.chartData}
                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text:'Largest Cities In '+this.props.location,
                            fontSize:15
                        },
                        legend:{
                            display:this.props.displayLegend,
                            position:this.props.legendPosition
                        }
                    }}
                />
            </div>
        )
    }


  render(){
    console.log("state in Chart class", this.state.chartData)
    return (
        <div>
            <div className = 'GraphContainer'>
            {this.ShowBarGraph()}
            </div>

            {/* {this.ShowDoughnutGraph ()} */}
        </div>
    )
  }
}

export default Chart;