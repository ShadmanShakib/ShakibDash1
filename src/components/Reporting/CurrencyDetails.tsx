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
          <Box
            display="flex"
            borderRadius="8"
            boxShadow="0px 0px 10px rgba(0, 0, 0, 0.25)"
            p={5}
            alignItems="center"
            bg="gray.700"
            key={item.id}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              mr="3"
            >
              <Image height="10" width="10" src={item.image} />
              <Text color="white"> {item.name}</Text>
            </Box>

            <Box>
              <Text color="white">Price: $ {item.current_price}</Text>
              <Text color="white">Change: {item.price_change_24h}</Text>

              <Text color="white">
                Percentage: {item.price_change_percentage_24h}%
              </Text>
            </Box>
          </Box>
        );
      })}
    </Grid>
  );
}

export default CurrencyDetails;
