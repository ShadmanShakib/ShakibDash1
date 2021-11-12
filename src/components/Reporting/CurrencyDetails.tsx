import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { useGetMarketQuery } from "../../services/Crypto";
function CurrencyDetails() {
  const { data, isLoading, error } = useGetMarketQuery("");
  React.useEffect(() => {
    console.log(data);
  }, []);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  if (!data) return <div>No data...</div>;
  return (
    <Box>
      {data.map((item) => {
        return (
          <Box key={item.id}>
            <Image height="10" width="10" src={item.image} />
            <Text color="white"> {item.name}</Text>
            <Text color="white">$ {item.current_price}</Text>
          </Box>
        );
      })}
    </Box>
  );
}

export default CurrencyDetails;
