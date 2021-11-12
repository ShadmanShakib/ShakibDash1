import React from "react";
import { Box, Image, Text, Grid } from "@chakra-ui/react";
import { useGetMarketQuery } from "../../services/Crypto";
function CurrencyDetails() {
  const { data, isLoading, error } = useGetMarketQuery("");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  if (!data) return <div>No data...</div>;
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={5}>
      {data.map((item) => {
        return (
          <Box display="flex" alignItems="center" bg="cyan.700" key={item.id}>
            <Box>
              <Image height="10" width="10" src={item.image} />
              <Text color="white"> {item.name}</Text>
            </Box>
            <Box>
              <Text color="white">Price: $ {item.current_price}</Text>
              <Text color="white">Change: {item.price_change_24h}</Text>
            </Box>
          </Box>
        );
      })}
    </Grid>
  );
}

export default CurrencyDetails;
