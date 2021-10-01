import React from "react";
import { Box, Image, Input } from "@chakra-ui/react";
import { ReactComponent as Google } from "../../icons/Google.svg";

import { NuxButton, IconButton } from "../buttons";
import { LinkText, NormalText } from "../Text";

interface ILogInCard {
  onClick?: () => void;
}
function LogInCard(props: ILogInCard) {
  return (
    <Box display="flex" justifyContent="center" py="80px" bg="#f6f8f9">
      <Box
        boxShadow="0 5px 20px 0 rgba(21, 7, 38, 0.08)"
        bg="white"
        borderRadius="8px"
        pb="32px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        maxW="440px"
        pt="110px"
        px="48px"
        w="calc(100%-16px)"
        alignItems="center"
      >
        <Image
          height="24px"
          mb="48px"
          src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/6c76122a923c696febd26d2a843aa6daf960a3df/logo.png"
        />
        <IconButton
          icon={<Google height="20" width="20" />}
          title="Log in with Google"
        />

        <Box mb="6">
          <NormalText text="Email Address" />

          <Input
            height=" 36px"
            py="4px"
            mt="8px"
            width="100%"
            type="text"
            _focus={{ borderColor: "#9ca6af" }}
          />
        </Box>
        <Box mb="8">
          <NormalText text="Password" />
          <Input
            height=" 36px"
            py="4px"
            mt="8px"
            width="100%"
            _focus={{ borderColor: "#9ca6af" }}
            type="password"
            mb="1"
          />
          <NormalText underline={true} text="Forgot your password?" />
        </Box>

        <NuxButton />
        <Box display="flex" my="8" justifyContent="center">
          <NormalText text="Don't have an account?" />

          <LinkText text="Sign up" />
        </Box>
        <Box textAlign="center">
          <NormalText text="This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply." />
        </Box>
      </Box>
    </Box>
  );
}

export default LogInCard;
