import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { useGetCurrenciesQuery } from "../../services";
import { CurrencyDataType } from "./type";
function CurrencyDetails() {
  const { data, error, isLoading } = useGetCurrenciesQuery("");
  React.useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  return (
    <Box display="flex">
      {data.map((currency: CurrencyDataType) => {
        const p = Number(currency.price);
        const price = p.toFixed(2);
        const price_change = Number(currency["1d"].price_change).toFixed(2);
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
              <Text color={Number(price_change) > 0 ? "red.500" : "white"}>
                Change: $ {price_change}
              </Text>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default CurrencyDetails;
