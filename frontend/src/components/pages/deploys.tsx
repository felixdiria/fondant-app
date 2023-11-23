import { Flex, Text } from "@chakra-ui/layout";

export default function Deploys() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="calc(100vh - 180px)"
      fontSize="4xl"
      fontWeight="normal"
    >
      <Text color="grey.100">No deploys yet</Text>
    </Flex>
  );
}