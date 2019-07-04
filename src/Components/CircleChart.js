import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
const COLORS = ['#ffd180', '#b0bec5', '#64b5f6'];

const RADIAN = Math.PI / 180; 
class CircleChart extends React.Component {        
  renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x  = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy  + radius * Math.sin(-midAngle * RADIAN);
      return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
              {`${(percent * 100).toFixed(0)}%`}
          </text>
      );
    };

 convertObjectToData = () => {
      const convertedData = [];
      const selectedData =  this.props.data;
        for (const data in selectedData) {
          if (data !== "year" && data !== "percent" && data !== "units" && data !== "grow_units") {
            convertedData.push({name: data, value: selectedData[data] * 100});
          }
        }  
        return convertedData;
  }

    render () {
        const data  = this.convertObjectToData()
        console.log(data);
        return (
        	<PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data} 
          cx={300} 
          cy={200} 
          labelLine={false}
          label={this.renderCustomizedLabel}
          outerRadius={150} 
          fill="#8884d8"
        >
        	{
          	data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
      </PieChart>
      );
    }
  }
  
  export default CircleChart;