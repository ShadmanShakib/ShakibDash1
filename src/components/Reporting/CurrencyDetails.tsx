import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { useGetCurrenciesQuery } from "../../services";
import { CurrencyDataType } from "./type";
function CurrencyDetails() {
  const { data, error, isLoading } = useGetCurrenciesQuery("");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  return (
    <Box>
      {data.map((currency: CurrencyDataType) => {
        const p = Number(currency.price);
        const price = p.toFixed(2);
        return (
          <Box key={currency.id}>
            <Text>{currency["1d"].volume}</Text>
            <Image src={currency.logo_url} alt={currency.name} />
            <Box>$ {price}</Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default CurrencyDetails;
