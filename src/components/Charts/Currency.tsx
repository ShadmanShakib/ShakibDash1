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
  };
  const series = [
    {
      name: "series-1",
      data: data?.prices.map((price) => price[1].toFixed(2)),
    },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  return (
    <Box color="white">
      <Charts width="800" series={series} options={options} />
    </Box>
  );
}
export default Currency;
