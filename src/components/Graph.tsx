import React from "react";
import "../styles/Graph.scss";
import { itemSales } from "../actions/itemActionTypes";
import { XYPlot, XAxis, LineSeries } from "react-vis";

type GraphProps = {
  sales: itemSales[];
};

const Graph: React.FC<GraphProps> = (props: GraphProps) => {
  const { sales } = props;

  // Satify LineSeriese props of any[];
  let retailSalesData: any[] = [];
  let wholesaleSalesData: any[] = [];

  // creating data points.
  sales.map((sale) => {
    let day = sale["weekEnding"].split("-");
    let rearrangedDay = `${day[1]}-${day[2]}-${day[0]}`;
    wholesaleSalesData.push({
      x: new Date(rearrangedDay),
      y: sale["wholesaleSales"],
    });
    retailSalesData.push({
      x: new Date(rearrangedDay),
      y: sale["retailSales"],
    });
  });

  return (
    <div className="graph-container">
      <h3 className="graph-title">Retail Sales</h3>
      <p className="graph-subtitle">Wholesale Sales in grey</p>
      <XYPlot
        xType="time"
        yDomain={[-1500000, 2000000]}
        width={1100}
        height={500}
      >
        <XAxis />
        <LineSeries
          style={{ strokeLinejoin: "round" }}
          data={retailSalesData}
        />
        <LineSeries color="grey" data={wholesaleSalesData} />
      </XYPlot>
    </div>
  );
};

export default Graph;
