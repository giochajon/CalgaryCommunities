import React, {Component} from 'react';
import {HorizontalBar, Doughnut} from 'react-chartjs-2';
import './Chart.css';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData : { 
                labels: [this.props.lb1, this.props.lb2],
                datasets:[
                  {
                    label:this.props.tit,
                    data:[
                      parseInt(this.props.val1),
                      parseInt(this.props.val2)
                    ],
                    backgroundColor:[
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                    ]
                  }
                ]
              }
    
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
               
                <HorizontalBar
                    data={this.state.chartData}
                    width={100}
                    height={30}
                    options={{
                        maintainAspectRatio: true,
                        title:{ 
                            display:this.props.displayTitle,
                            text:this.props.mtitle,
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