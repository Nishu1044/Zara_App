import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Link, Text } from '@chakra-ui/react';



const Navbar = () => {
  return (  
  <>
 
    <Box as="nav"  border=" 2px solid gray.200" py={4} backgroundColor='green.50'maxW='1490px'mx='auto'>
      <Flex 
        maxW="1200px" 
        mx="auto" 
        px={4} 
        align="center" 
        justify="space-between"
      >


        <Text fontSize="5xl" fontWeight="bold" textShadow="2px 2px 4px rgba(0, 0, 0, 0.4)">
          Zara
        </Text>

        
        <Flex as="ul" listStyleType="none" m={0} p={0} >
          

          <Link as={RouterLink} to="/" mx={5} fontWeight="bold">
            Home
          </Link>
          {/* <Link as={RouterLink} to="/login" mx={5} fontWeight="bold">
            Login
          </Link> */}
          <Link as={RouterLink} to="/logout" mx={5} fontWeight="bold">
            Logout
          </Link>
          <Link as={RouterLink} to="/products" mx={5} fontWeight="bold">
           Products
          </Link>

          <Link as={RouterLink} to="/cartview" mx={5} fontWeight="bold">🛒</Link>
        </Flex>
      
       
      </Flex>


    </Box>


   

  </>
  );
};

export default Navbar;

