import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { useGetCurrenciesQuery } from "../../services";
import { CurrencyDataType } from "./type";
function CurrencyDetails() {
  const { data, error, isLoading } = useGetCurrenciesQuery("");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  return (
    <Box display="flex">
      {data.map((currency: CurrencyDataType) => {
        const p = Number(currency.price);
        const price = p.toFixed(2);
        return (
          <Box
            mr="8"
            display="flex"
            w="60"
            borderRadius="8"
            alignItems="center"
            h="20"
            bg="cyan.800"
            key={currency.id}
          >
            <Image
              mx="3"
              h="10"
              w="10"
              src={currency.logo_url}
              alt={currency.name}
            />
            <Box>
              <Text color="white">Price: $ {price}</Text>
              <Text color="white">
                Change: $ {Number(currency["1d"].price_change).toFixed(2)}
              </Text>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default CurrencyDetails;
