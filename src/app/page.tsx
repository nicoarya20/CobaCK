'use client'
import { Carousel, CarouselSlide } from "@mantine/carousel";
import { ActionIcon, Anchor, BackgroundImage, Box, Button, Container, Divider, Flex, Group, Image, Stack, Text } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <Box>
      <Stack>
        <Box>
          <HeaderTop />
          <Header />
          <Box1 />
        </Box>
      </Stack>
    </Box>
  );
}

export function HeaderTop() {
  return (
    <Box>
      <Box bg={"#e6e6e6"} p={7}>
        <Box pr={80}>
          <Flex direction={"row"} gap={"xs"} align={"center"} justify={"right"}>
            <Anchor underline="never">
              <Text fw={"bold"} c={"black"} fz={"11"}>CONTACT</Text>
            </Anchor>
            <ActionIcon size={"xs"} variant="transparent">
              <Divider size={"xs"} orientation="vertical" />
            </ActionIcon>
            <Anchor underline="never">
              <Text fw={"bold"} c={"black"} fz={"11"}>CAREER</Text>
            </Anchor>
            <ActionIcon size={"xs"} variant="transparent">
              <Divider size={"xs"} orientation="vertical" />
            </ActionIcon>
            <Anchor underline="never">
              <Text fw={"bold"} c={"black"} fz={"11"}>DOWNLOAD CK APP</Text>
            </Anchor>
            <ActionIcon size={"xs"} variant="transparent">
              <Divider size={"xs"} orientation="vertical" />
            </ActionIcon>
            <Text fw={"bold"} c={"black"} fz={"11"}>Follow us:</Text>
            <ActionIcon variant="transparent">
              <FaInstagram color={"black"} size={15} />
            </ActionIcon>
            <ActionIcon size={"xs"} variant="transparent">
              <Divider size={"xs"} orientation="vertical" />
            </ActionIcon>
            <ActionIcon size={"xs"} variant="transparent">
              <FaFacebook color={"black"} size={15} />
            </ActionIcon>
            <ActionIcon size={"xs"} variant="transparent">
              <Divider size={"xs"} orientation="vertical" />
            </ActionIcon>
            <ActionIcon size={"xs"} variant="transparent">
              <AiFillTikTok color={"black"} size={17} />
            </ActionIcon>
            <ActionIcon size={"xs"} variant="transparent">
              <Divider size={"xs"} orientation="vertical" />
            </ActionIcon>
            <ActionIcon size={"xs"} variant="transparent">
              <FaYoutube color={"black"} size={15} />
            </ActionIcon>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
export function Header() {
  return (
    <Box p={12} bg={"#ec1c24"}>
      <Container size={"lg"}>
        <Flex direction={"row"} align={"center"} gap={"lg"} justify={"space-between"} >
          <Box>
            <Flex direction={"row"} align={"center"} gap={"lg"} >
              <Image src={"/Assets/Image/Logo.png"} alt="" w={"210px"} />
              <Anchor underline="never">
                <Text fw={"bold"} c={"white"} fz={"sm"}>About Us</Text>
              </Anchor>
              <Anchor underline="never">
                <Text fw={"bold"} c={"white"} fz={"sm"}>PRODUCTS</Text>
              </Anchor>
              <Anchor underline="never">
                <Text fw={"bold"} c={"white"} fz={"sm"}>PROMOTION</Text>
              </Anchor>
              <Anchor underline="never">
                <Text fw={"bold"} c={"white"} fz={"sm"}>NEWS & BLOG</Text>
              </Anchor>
              <Anchor underline="never">
                <Text fw={"bold"} c={"white"} fz={"sm"}>FRANCHISE</Text>
              </Anchor>
              <Anchor underline="never">
                <Text fw={"bold"} c={"white"} fz={"sm"}>FINANCIAL SERVICES</Text>
              </Anchor>
            </Flex>
          </Box>
          <Box>
            <Button radius={"xl"} bg={"#fb3"}>
              <Box pt={5} pb={5}>
                <Flex direction={"column"} >
                  <Text ta={"start"} size="xs" fw={"bold"} c={"white"}>
                    DOWNLOAD MOBILE
                  </Text>
                  <Text ta={"start"} size="xs" fw={"bold"} c={"white"}>
                    APP
                  </Text>
                </Flex>
              </Box>
            </Button>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
export function Box1() {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  return (
    <Box>
      <Box h={500}>
        <Carousel
          withIndicators height={500}
          align="start"
          loop
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          <CarouselSlide>
            <BackgroundImage src={"Assets/Image/CkSlider1.jpg"} w={"1440"} h={"500"}>
              <Box>
                <Group >
                  <Stack gap={"0"} pt={60} pl={80}>
                    <Text style={{ lineHeight: "1em" }} ta={"left"} fw={"bolder"} c={"white"} fz={"8vmin"}>Momen</Text>
                    <Text style={{ lineHeight: "1em" }} ta={"left"} fw={"bold"} c={"white"} fz={"8vmin"}>Kumpul</Text>
                    <Text style={{ lineHeight: "1em" }} ta={"left"} fw={"bold"} c={"white"} fz={"8vmin"}>Bersama jadi</Text>
                    <Text style={{ lineHeight: "1em" }} ta={"left"} fw={"bold"} c={"white"} fz={"8vmin"}>Lebih</Text>
                    <Text style={{ lineHeight: "1em" }} ta={"left"} fw={"bold"} c={"white"} fz={"8vmin"}>Berwarna!</Text>
                  </Stack>
                </Group>
                <Text pt={20} pl={80} ta={"left"} c={"white"} fz={"md"}>Layanan terbaik untuk anda</Text>
              </Box>
            </BackgroundImage>
          </CarouselSlide>
          <CarouselSlide>2</CarouselSlide>
          <CarouselSlide>3</CarouselSlide>
        </Carousel>
      </Box>
    </Box>
  )
}
