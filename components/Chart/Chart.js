import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value)//i have used map to get the array of values from array of object which includes months and values from dataPoints prop
    const totalMaximum = Math.max(...dataPointValues)//Im used spread operator to pull out individual values from an array of values
    return(
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => (
                <ChartBar 
                    key= {dataPoint.label}
                    value= {dataPoint.value}
                    maxValue= {totalMaximum}
                    label= {dataPoint.label}
                />
            ))}
        </div>
    )
}

export default Chart