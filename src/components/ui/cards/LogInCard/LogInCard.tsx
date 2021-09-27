import React from "react";
import { Box, Image, Input } from "@chakra-ui/react";
import { ReactComponent as Google } from "../../../icons/Google.svg";
import "./LogInCard.module.css";
import { NuxButton } from "../../buttons";
import { LinkText, NormalText } from "../../Text";
function LogInCard() {
  return (
    <Box display="flex" justifyContent="center" pt="80px" bg="#f6f8f9">
      <Box
        boxShadow="0 5px 20px 0 rgba(21, 7, 38, 0.08)"
        bg="white"
        borderRadius="8px"
        pb="32px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        maxW="440px"
        pt="56px"
        px="48px"
        w="calc(100%-16px)"
        alignItems="center"
      >
        <Image
          height="24px"
          mb="48px"
          src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/6c76122a923c696febd26d2a843aa6daf960a3df/logo.png"
        />
        <Box
          mb="8"
          w="100%"
          bg="white"
          borderColor="#cbd4db"
          color="#273240"
          fill="#6f7782"
          fontSize="16px"
          height="48px"
          lineHeight="48px"
          pos="relative"
          role="button"
          px="16px"
          cursor="pointer"
          display="inline-flex"
          alignItems="center"
          border="1px solid"
          borderRadius="6px"
          justifyContent="center"
          overflow="hidden"
          _hover={{ bg: "#f6f6f6" }}
          transitionDuration=".2s"
          transition="all"
        >
          <Google height="20" width="20" />
          <Box mx="10">Log in with google</Box>
        </Box>
        <div className="Seperator-row">
          <div className="eparatorRow-horizontalLine"></div>
        </div>
        <Box>
          <NormalText text="Email Address" />

          <Input
            height=" 36px"
            py="4px"
            mt="8px"
            width="100%"
            type="text"
            _focus={{ borderColor: "#9ca6af" }}
            mb="14px"
          />
        </Box>
        <Box>
          <NormalText text="Password" />
          <Input
            height=" 36px"
            py="4px"
            mt="8px"
            width="100%"
            _focus={{ borderColor: "#9ca6af" }}
            mb="14px"
            type="password"
          />
        </Box>

        <NuxButton />
        <NormalText text="Don't have an account?" />
        <LinkText text="Sign up" />
      </Box>
    </Box>
  );
}

export default LogInCard;
