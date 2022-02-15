import { Box, Text, HStack, VStack, Pressable, Image } from "native-base";

export default function Hello() {
  return (
    <Box bg="cyan.600" py={3} px={6} rounded="md">
      <HStack>
        <Box>
          <VStack>
            <Text fontSize="md" color="white">
              Today @ 9 Am
            </Text>
            <Text color="white" fontSize="lg">Let's talk about avatar!</Text>
          </VStack>
          <Pressable bg="gray.600" px="4" py="3" rounded="md" my="3">
            <Text textAlign="center" color="white">Read me</Text>
          </Pressable>
        </Box>
        <Image
          source={{
            uri: "https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg",
          }}
          alt="Aang flying and surrounded by clouds"
          height="100"
          width="100"
          rounded="full"
          marginLeft={20}
        />
      </HStack>
    </Box>
  );
}
