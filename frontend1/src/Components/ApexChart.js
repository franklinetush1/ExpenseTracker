import React, { useState } from "react";
import { useGlobalContext } from '../Data/globalContext';
import Chart from "react-apexcharts";

const ApexChart = () => {
  const { incomes, expenses} = useGlobalContext();

  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: incomes.map((inc) =>{
            const {date} = inc
            return date
        })
      }
    },
    series: [
      {
        name: "series-1",
        data: incomes.map((income) => income.amount)
      },
      {
        name: "series-2",
        data: expenses.map((expense) => expense.amount)
      }
    ]
  });

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="line"
            width="500"
          />
        </div>
      </div>
    </div>
  );
};

export default ApexChart;
