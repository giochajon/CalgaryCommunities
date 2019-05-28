import React, {Component} from 'react';
import {HorizontalBar, Doughnut} from 'react-chartjs-2';

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
    scale: {
        Axes:[{
        barThickness: 20,
        maxBarThickenss: 25,
        }]
    }
  }

  render(){
    return (
      <div className="chart">
        <HorizontalBar
          data={this.state.chartData}
          options={{

            title:{
              display:this.props.displayTitle,
              text:'Largest Cities In '+this.props.location,
              fontSize:15
            },
            
            legend:{
              displayLegend:false,
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />

        <HorizontalBar
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
}

export default Chart;
