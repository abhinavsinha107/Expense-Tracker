import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        const { value, label } = dataPoint;
        return (
          <ChartBar
            key={Math.random()}
            value={value}
            maxValue={totalMaximum}
            label={label}
          />
        );
      })}
    </div>
  );
};
export default Chart;
