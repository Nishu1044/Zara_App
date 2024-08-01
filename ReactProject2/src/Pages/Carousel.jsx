
import React from 'react';
import Slider from 'react-slick';
import { Box, Image, Link, Flex, Input, Spacer } from '@chakra-ui/react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  
  };

  const linkStyles = {
    mx: 2, // Margin on the x-axis (left and right)
    px: 4, // Padding on the x-axis (left and right)
    py: 2, // Padding on the y-axis (top and bottom)
    bg: "rgba(0, 0, 0, 0.6)", // Semi-transparent background
    borderRadius: "md", // Medium border radius
    color: "white", // White text color
    fontWeight: "bold", // Bold text
    fontSize: "lg", // Large font size
    textTransform: "uppercase", // Uppercase text
  };

  const searchBarStyles = {
    bg: "rgba(0, 0, 0, 0.6)", // Semi-transparent background
    borderRadius: "md", // Medium border radius
    color: "white", // White text color
    fontWeight: "bold", // Bold text
    fontSize: "lg", // Large font size
    border: "none", // No border
    outline: "none", // No outline
    _placeholder: { color: "gray.300" }, // Placeholder color
    width: "200px", // Set a fixed width for the search bar
  };

  return (
    <Box maxW="1450px" mx="auto" my={4} position="relative">
      <Slider {...settings}>
        <Box position="relative">
          <Image src="https://static.zara.net/assets/public/c7bd/853d/5332492596b7/48a1b1ed9623/image-landscape-fill-ef7d39c2-1699-4ebe-8042-ece4c21d0ceb-default_0.jpg?ts=1716476175692&w=1366" alt="Slide 1" />
          <Flex position="absolute" top="40%" left="5%" transform="translateY(-50%)" color="white" fontWeight="bold" fontSize="2xl" alignItems="center" width="90%">
            <Link href="/men" sx={linkStyles}>Men</Link>
            <Link href="/women" sx={linkStyles}>Women</Link>
            <Link href="/kids" sx={linkStyles}>Kids</Link>
            <Link href="/beauty" sx={linkStyles}>Beauty</Link>
            {/* <Link href="/products" sx={linkStyles}>Products</Link> */}

            <Spacer />
            <Input sx={searchBarStyles} placeholder="Search..." />
          </Flex>
        </Box>
        <Box position="relative">
          <Image src="https://static.zara.net/assets/public/bec5/107a/432742228fb6/7d20dbb6f2c2/image-landscape-fill-87bbfcb6-a869-47d7-80b1-4389a0ddb283-default_0.jpg?ts=1717397340325&w=1366" alt="Slide 2" />
          <Flex position="absolute" top="40%" left="5%" transform="translateY(-50%)" color="white" fontWeight="bold" fontSize="2xl" alignItems="center" width="90%">
            <Link href="/men" sx={linkStyles}>Men</Link>
            <Link href="/women" sx={linkStyles}>Women</Link>
            <Link href="/kids" sx={linkStyles}>Kids</Link>
            <Link href="/beauty" sx={linkStyles}>Beauty</Link>
            {/* <Link href="/products" sx={linkStyles}>Products</Link> */}
            <Spacer />
            <Input sx={searchBarStyles} placeholder="Search..." />
          </Flex>
        </Box>
        <Box position="relative">
          <Image src="https://static.zara.net/assets/public/b44d/4b91/fc45444cbcde/11412adcf60c/image-landscape-fill-df5da892-8fae-47a1-8f7d-a1d1b4af1677-default_0.jpg?ts=1717398077070&w=1366" alt="Slide 3" />
          <Flex position="absolute" top="40%" left="5%" transform="translateY(-50%)" color="white" fontWeight="bold" fontSize="2xl" alignItems="center" width="90%">
            <Link href="/men" sx={linkStyles}>Men</Link>
            <Link href="/women" sx={linkStyles}>Women</Link>
            <Link href="/kids" sx={linkStyles}>Kids</Link>
            <Link href="/beauty" sx={linkStyles}>Beauty</Link>
            {/* <Link href="/products" sx={linkStyles}>Products</Link> */}
            <Spacer />
            <Input sx={searchBarStyles} placeholder="Search..." />
          </Flex>
        </Box>

        <Box position="relative">
          <Image src="https://static.zara.net/assets/public/eac7/c973/bb1d4aff869c/ab3724a94a8a/image-landscape-fill-70c37f9a-1518-467f-ba11-8cac6467aea7-default_0.jpg?ts=1716541801205&w=1366" alt="Slide 3" />
          <Flex position="absolute" top="40%" left="5%" transform="translateY(-50%)" color="white" fontWeight="bold" fontSize="2xl" alignItems="center" width="90%">
            <Link href="/men" sx={linkStyles}>Men</Link>
            <Link href="/women" sx={linkStyles}>Women</Link>
            <Link href="/kids" sx={linkStyles}>Kids</Link>
            <Link href="/beauty" sx={linkStyles}>Beauty</Link>
            {/* <Link href="/products" sx={linkStyles}>Products</Link> */}
            <Spacer />
            <Input sx={searchBarStyles} placeholder="Search..." />
          </Flex>
        </Box>
      </Slider>
    </Box>
  );
};

export default Carousel;







