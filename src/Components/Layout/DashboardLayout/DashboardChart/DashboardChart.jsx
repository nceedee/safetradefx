import * as React from "react";
import { useState, useEffect } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { useMediaQuery } from "@mui/material";
import { fetchCryptoData } from "../cryptoDataset";
import { SkeletonUi } from "../../../Global/Skeleton/Skeleton";

export default function DashboardChart() {
  const [cryptoData, setCryptoData] = useState([]);
  const [chartData, setChartData] = useState({
    xAxis: { data: [] },
    series: [{ data: [] }],
  });
  const [loading, setLoading] = useState(true); // Added loading state

  const isSmallScreen = useMediaQuery("(max-width: 991px)");

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCryptoData();
        setCryptoData(data);

        if (data.length > 0) {
          // Process the data to fit the LineChart requirements
          const xData = data.map((crypto, index) => index + 1); // Use index as x-axis data
          const yData = data.map((crypto) => crypto.current_price);

          setChartData({
            xAxis: { data: xData },
            series: [{ data: yData, area: true }],
          });
        }
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };
    getData();
  }, []);

  if (loading) {
    // Display skeleton while loading
    return (
      <div className="bg-[#202b5d] rounded-md text-white  w-full md:h-[300px] flex justify-center items-center">
        <SkeletonUi
          width={isSmallScreen ? "100%" : 500}
          height={isSmallScreen ? 200 : 300}
        />
      </div>
    );
  }

  if (cryptoData.length === 0) {
    // Display a message or another skeleton when there's no data
    return (
      <div className="bg-[#202b5d] rounded-md text-white md:h-[300px] w-full flex justify-center items-center">
        <SkeletonUi
          width={isSmallScreen ? "100%" : 500}
          height={isSmallScreen ? 200 : 300}
        />
      </div>
    );
  }

  return (
    <div className="bg-[#202b5d] rounded-md text-white w-full flex justify-center items-center">
      <div
        style={{
          width: isSmallScreen ? "100%" : 500,
          height: isSmallScreen ? 200 : 300,
          overflow: "hidden",
        }}
      >
        <LineChart
          xAxis={[{ data: chartData.xAxis.data }]}
          series={[{ data: chartData.series[0].data, area: true }]}
          sx={{
            ".MuiLineChart-root": {
              color: "white",
              width: "100%",
              height: "100%",
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
            // Additional mobile-specific styling
            ...(isSmallScreen && {
              ".MuiLineChart-root": {
                fontSize: "0.75rem", // Adjust font size for small screens
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
    </div>
  );
}
