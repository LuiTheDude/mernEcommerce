import { useState } from 'react'
import { Container, VStack, Heading, Box, Input, Button } from '@chakra-ui/react'
import { useColorModeValue } from '@/components/ui/color-mode'
import { useProductStore } from '@/store/product'

const CreatePage = () => {
  const [ newProduct, setNewProduct ] = useState({
    name: "",
    price: "",
    image: "", 
  })

  const { createProduct } = useProductStore(); 

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    console.log("Success: ", success);
    console.log("Message: ", message); 
    console.log(newProduct);
    
  }

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"3xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>
        <Box w={"75vh"} bg={useColorModeValue("white", "gray.800")}
          p={6} rounded={"lg"} shadow={"md"}
        >
          <VStack spacing={4}>
            <Input 
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value})}
              border={'solid'}
              borderColor={'gray.600'}
              borderWidth={1}
            />

            <Input 
              placeholder="Price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value})}
              border={'solid'}
              borderColor={'gray.600'}
              borderWidth={1}
            />

            <Input 
              placeholder="Image URL"
              name="image"
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value})}
              border={'solid'}
              borderColor={'gray.600'}
              borderWidth={1}
            />

            <Button bg="blue.500" color="white" onClick={handleAddProduct} w='full'
            _hover={{ bg: "blue.600" }}
            _active={{ bg: "blue.500", opacity: 0.7 }}
            >
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage