import React from "react";
import { Box } from "@chakra-ui/react";
import { Sidebar } from "../../components/common";
import { useGetExRateQuery } from "../../services/CryptoApi";
import Charts from "react-apexcharts";
function Reporting() {
  const { data, isLoading, error } = useGetExRateQuery("BTC");
  const rate: string[] = React.useMemo(() => [], []);

  React.useEffect(() => {
    data?.forEach((item) => rate.push(item.rate));
  }, [data, rate]);
  const ChartData = {
    series: [
      {
        type: "line",
        name: "Series 1",
        data: rate,
      },
    ],

    // Options
    options: {
      id: "1",

      xaxis: {
        categories: [],
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
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  if (!data) return <div>No data...</div>;

  return (
    <Box display="flex" minH="100vh">
      <Sidebar />
      <Charts
        options={ChartData.options}
        series={ChartData.series}
        type="line"
      />
      <button onClick={() => console.log(rate)}>Click</button>
    </Box>
  );
}

export default Reporting;
