import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { useGetCurrenciesQuery } from "../../services";
import { CurrencyDataType } from "./type";
function CurrencyDetails() {
  const { data, error, isLoading } = useGetCurrenciesQuery("");
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  return (
    <Box>
      {data.map((currency: CurrencyDataType) => {
        return (
          <Box key={currency.id}>
            <Image src={currency.logo_url} alt={currency.name} />
            {currency.price}
          </Box>
        );
      })}
    </Box>
  );
}

export default CurrencyDetails;
