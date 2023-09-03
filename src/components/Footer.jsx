import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202308/pandasecurity-crypto-gaming_0-sixteen_nine.jpg?size=948:533";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Cryptox is the fastest and most reliable Crypto price tracking website.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>CRYPTOX</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
