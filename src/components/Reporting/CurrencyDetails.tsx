import React from "react";
import { Box, Image, Text, Grid } from "@chakra-ui/react";
import { useGetMarketQuery } from "../../services/Crypto";
function CurrencyDetails() {
  const { data, isLoading, error } = useGetMarketQuery("");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  if (!data) return <div>No data...</div>;
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={5}>
      {data.map((item) => {
        return (
          <Box key={item.id}>
            <Image height="10" width="10" src={item.image} />
            <Text color="white"> {item.name}</Text>
            <Text color="white">$ {item.current_price}</Text>
          </Box>
        );
      })}
    </Grid>
  );
}

export default CurrencyDetails;
