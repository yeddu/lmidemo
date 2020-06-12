import React, { Component } from "react";
import Chart from "react-google-charts";
import {
  AgentMontlyPolicySales,
  LOBMonthlyPolicySales,
  TotalPoliciesSoldInCurrentYear,
} from "../Data/reportData";
class Reports extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h3 className="text-center my-2">Sales Report</h3>
        <div className="d-flex row">
          <div className="container col-sm-6 col-xs-12 my-2  border">
            <Chart
              width={"100%"}
              height={300}
              chartType="ColumnChart"
              loader={<div>Loading Chart</div>}
              data={AgentMontlyPolicySales}
              options={{
                title: "Policies sold by your Agents in the month of June 2020",

                hAxis: {
                  title: "Agent Name",
                  minValue: 0,
                },
                vAxis: {
                  title: "No. of Policies Sold",
                },
              }}
              legendToggle
            />
          </div>

          <div className="container col-sm-6 col-xs-12 my-2  border">
            <Chart
              width={"100%"}
              height={"300px"}
              chartType="PieChart"
              loader={<div>Loading Chart</div>}
              data={LOBMonthlyPolicySales}
              options={{
                title:
                  "Policies Sold in each Line of Business in the month of June 2020",
              }}
              rootProps={{ "data-testid": "1" }}
            />
          </div>
          <div className="container col-sm-6 col-xs-12 my-2 border">
            <Chart
              width={"100%"}
              height={"300px"}
              chartType="LineChart"
              loader={<div>Loading Chart</div>}
              data={TotalPoliciesSoldInCurrentYear}
              options={{
                hAxis: {
                  title: "Month in 2020",
                },
                vAxis: {
                  title: "Policies Sold",
                },
              }}
              rootProps={{ "data-testid": "1" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Reports;
