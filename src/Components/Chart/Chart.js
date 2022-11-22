import "./Chart.css"
import ChartBar from "./ChartBar"

export default function Chart(props){

    const dataPointsValueToCalculateMax = props.chartDataPoints.map(point => point.value);
    const maximumValue = Math.max(...dataPointsValueToCalculateMax)

    return(
        <div className="chart">
            {props.chartDataPoints.map((dataPoint) => (
                <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={maximumValue}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};