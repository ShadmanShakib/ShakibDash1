import React from "react";
import { useGetMarketChartQuery } from "../../services/Crypto";
import { Box } from "@chakra-ui/react";
import Charts from "react-apexcharts";
function Currency() {
  const { data, isLoading, error } = useGetMarketChartQuery("1");
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  };
  const series = [
    {
      name: "series-1",
      data: data?.prices.map((price) => price[1]),
    },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  return (
    <Box color="white">
      <Charts series={series} options={options} />
    </Box>
  );
}
export default Currency;
