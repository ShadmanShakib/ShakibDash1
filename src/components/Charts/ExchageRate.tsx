import React from "react";
import Charts from "react-apexcharts";
import { useGetExRateQuery } from "../../services/CryptoApi";
import { Box } from "@chakra-ui/react";
function ExchageRate() {
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
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }
  return (
    <div>
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
    </div>
  );
}

export default ExchageRate;
