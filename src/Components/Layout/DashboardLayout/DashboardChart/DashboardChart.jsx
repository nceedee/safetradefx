import * as React from "react";
import { useState, useEffect } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { useMediaQuery } from "@mui/material";
import { fetchCryptoData } from "../cryptoDataset";

export default function DashboardChart() {
  const [cryptoData, setCryptoData] = useState([]);
  const [chartData, setChartData] = useState({
    xAxis: { data: [] },
    series: [{ data: [] }],
  });

  const isSmallScreen = useMediaQuery("(max-width: 991px)");

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCryptoData();
      setCryptoData(data);

      // Process the data to fit the LineChart requirements
      const xData = data.map((crypto, index) => index + 1); // Use index as x-axis data
      const yData = data.map((crypto) => crypto.current_price);

      setChartData({
        xAxis: { data: xData },
        series: [{ data: yData, area: true }],
      });
    };
    getData();
  }, []);

  return (
    <div className="bg-[#202b5d] rounded-md text-white w-full">
      <LineChart
        xAxis={[{ data: chartData.xAxis.data }]}
        series={[{ data: chartData.series[0].data, area: true }]}
        width={isSmallScreen ? 300 : 500}
        height={ isSmallScreen ? 200 : 300 }
        margin={isSmallScreen ? "auto" : ''}
        sx={{
          ".MuiLineChart-root": {
            color: "white",
            width: isSmallScreen ? "100%" : "auto",

          },
          ".MuiAxis-root": {
            ".MuiAxisTick-root": {
              color: "white",
            },
            ".MuiAxisLabel-root": {
              color: "white",
            },
            ".MuiAxisLine-root": {
              stroke: "white",
            },
          },
          // Additional mobile-specific styling can go here
          ...(isSmallScreen && {
            ".MuiLineChart-root": {
              width: "100%",
            },
            ".MuiAxis-root": {
              ".MuiAxisTick-root": {
                fontSize: "0.75rem",
              },
              ".MuiAxisLabel-root": {
                fontSize: "0.75rem",
              },
            },
          }),
        }}
      />
    </div>
  );
}
