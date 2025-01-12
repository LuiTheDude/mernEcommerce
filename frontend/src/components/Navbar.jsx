import { Container, Flex, Text, HStack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { PlusSquareIcon } from '@chakra-ui/icons';

const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={"4"}>
        <Flex 
            h={16} 
            alignItems={"center"} 
            justifyContent={"space-between"} 
            flexDir={{
                base:"column",
                sm:"row"
            }}
        >
            <Text
                fontSize={{ base: "22px", sm: "28px" }}
                fontWeight="bold"
                textAlign="center"
                css={{
                    background: "linear-gradient(to right, #22D3EE, #3B82F6)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                }}
            >
                <Link to={"/"}>Product Store 🛒</Link>
            </Text>
            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/create"}>
                     <Button>
                        <PlusSquareIcon fontSize={20}/>
                     </Button>
                </Link>
            </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar