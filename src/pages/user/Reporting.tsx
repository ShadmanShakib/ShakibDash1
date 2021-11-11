import React from "react";
import { Box } from "@chakra-ui/react";
import { Sidebar } from "../../components/common";
import { useGetExRateQuery } from "../../services/CryptoApi";
import Charts from "react-apexcharts";
function Reporting() {
  const { data, isLoading, error } = useGetExRateQuery("BTC");
  const ChartData = {
    series: [
      {
        type: "line",
        name: "Series 1",
        data: data?.map((item: any) => {
          return item["rate"];
        }),
      },
    ],

    // Options
    options: {
      id: "1",

      xaxis: {
        categories: data?.map((item: any) => {
          return item["date"];
        }),
      },

      // annotations
      annotations: {
        points: [
          {
            y: 40,
            x: "Mar",
            borderColor: "red",
            label: {
              borderColor: "green",
              style: {
                color: "#000",
                backgraound: "#222",
              },
              text: "23",
            },
          },
        ],
      },
      // datalavels
      dataLabels: {
        enabled: true,
      },
    },
  };

  return (
    <Box display="flex" minH="100vh">
      <Sidebar />
      {isLoading ? (
        <Box> Loading...</Box>
      ) : (
        <Charts
          height={700}
          width={700}
          options={ChartData.options}
          series={ChartData.series}
          type="line"
        />
      )}
    </Box>
  );
}

export default Reporting;
