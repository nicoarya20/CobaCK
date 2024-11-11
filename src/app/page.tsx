'use client'
import { Carousel, CarouselSlide } from "@mantine/carousel";
import { ActionIcon, Anchor, BackgroundImage, Box, Button, Container, Divider, Flex, Group, Image, Stack, Text } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState } from "react";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

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
    <Box w={"100%"}  style={{ zIndex: 99 }} pos={"fixed"}>
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
  const [hovered, setHovered] = useState(false);
  return (
    <Box top={40} w={"100%"} style={{ zIndex: 99 }} pos={"fixed"} p={12} bg={"#ec1c24"}>
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
            <Button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              radius={"xl"}
              bg={hovered ? "white" : "#fb3"}>
              <Box pt={5} pb={5}>
                <Flex direction={"column"} >
                  <Text
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    ta={"start"}
                    size="xs"
                    fw={"bold"}
                    c={hovered ? "#ec1c24" : "white"}>
                    DOWNLOAD MOBILE
                  </Text>
                  <Text
                    ta={"start"}
                    size="xs"
                    fw={"bold"}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    c={hovered ? "#ec1c24" : "white"}>
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
  const [hovered, setHovered] = useState(false);
  return (
    <Box pos={"relative"} pt={120}>
      <Box>
        <Carousel
          withIndicators
          height={600}
          align="start"
          loop
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          <CarouselSlide>
            <BackgroundImage src={"Assets/Image/CkSlider1.jpg"} w={"100%"} h={"100%"}>
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
                <Text pt={20} pl={80} ta={"left"} c={"white"} fz={"md"}>Jadi bisa jajan enak dan hemat sepuasnya</Text>
                <Box pt={20} pl={80}>
                  <Group>
                    <Button
                      radius={"xl"}
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      bg={hovered ? "#fb3" : "#ec1c24"}>
                      <Group>
                        <Text fz={"sm"}>CHECK IT OUT </Text>
                        <FaArrowRightLong size={15}/>
                      </Group>
                    </Button>
                  </Group>
                </Box>
              </Box>
            </BackgroundImage>
          </CarouselSlide>
          <CarouselSlide >
            <BackgroundImage src={"Assets/Image/CKSlider2.jpg"} w={"100%"} h={"100%"}>
              <Box pl={30} pt={120}>
                <Group >
                  <Stack gap={"0"} justify="center" pt={60} pl={80}>
                    <Text style={{ lineHeight: "1em" }} ta={"left"} fw={"bolder"} c={"white"} fz={"8vmin"}>Berdonasi &</Text>
                    <Text style={{ lineHeight: "1em" }} ta={"left"} fw={"bold"} c={"white"} fz={"8vmin"}>Berbelanja</Text>
                  </Stack>
                </Group>
                <Text pt={20} pl={80} ta={"left"} c={"white"} fz={"md"}>Bantu wujudkan impian para generasi penerus bangsa</Text>
              </Box>
            </BackgroundImage>
          </CarouselSlide>
          <CarouselSlide>
            <BackgroundImage src={"Assets/Image/CkSlider3.jpg"} w={"100%"} h={"100%"}>
              <Box>
                <Group >
                  <Stack gap={"0"} pt={60} pl={80}>
                    <Text style={{ lineHeight: "1em" }} ta={"left"} fw={"bolder"} c={"white"} fz={"8vmin"}>Menangkan Hadiah</Text>
                    <Text style={{ lineHeight: "1em" }} ta={"left"} fw={"bold"} c={"white"} fz={"8vmin"}>Senilai</Text>
                    <Text style={{ lineHeight: "1em" }} ta={"left"} fw={"bold"} c={"white"} fz={"8vmin"}>Jutaan Rupiah!</Text>
                    <Text style={{ lineHeight: "1em" }} ta={"left"} fw={"bold"} c={"white"} fz={"8vmin"}>Rupiah!</Text>
                  </Stack>
                </Group>
                <Text pt={20} pl={80} ta={"left"} c={"white"} fz={"md"}>Jajan sebanyak-banyaknya agar kesempatan kamu menang</Text>
                <Text pl={80} ta={"left"} c={"white"} fz={"md"}>lebih besar</Text>
                <Box pt={20} pl={80}>
                  <Group>
                    <Button
                      radius={"xl"}
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      bg={hovered ? "#fb3" : "#ec1c24"}>
                      <Group>
                        <Text fz={"sm"}>CHECK IT OUT </Text>
                        <FaArrowRightLong size={15}/>
                      </Group>
                    </Button>
                  </Group>
                </Box>
              </Box>
            </BackgroundImage>
          </CarouselSlide>
          <CarouselSlide>
            <BackgroundImage src={"Assets/Image/CKSlider4.jpg"} w={"100%"} h={"100%"}>
              <Box>
                <Group >
                  <Stack gap={"0"} pt={150} pl={100}>
                    <Text style={{ lineHeight: "1em" }} ta={"left"} fw={"bolder"} c={"white"} fz={"8vmin"}>Saldo habis?</Text>
                    <Text style={{ lineHeight: "1em" }} ta={"left"} fw={"bold"} c={"white"} fz={"8vmin"}>Nggak perlu</Text>
                    <Text style={{ lineHeight: "1em" }} ta={"left"} fw={"bold"} c={"white"} fz={"8vmin"}>khawatir!</Text>
                  </Stack>
                </Group>
                <Text pt={20} pl={100} ta={"left"} c={"white"} fz={"md"}>Sekarang bisa top up e-money di Circle K</Text>
                <Box pt={20} pl={100}>
                  <Group>
                    <Button
                      radius={"xl"}
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      bg={hovered ? "#fb3" : "#ec1c24"}>
                      <Group>
                        <Text fz={"sm"}>CHECK IT OUT </Text>
                        <FaArrowRightLong size={15}/>
                      </Group>
                    </Button>
                  </Group>
                </Box>
              </Box>
            </BackgroundImage>
          </CarouselSlide>
        </Carousel>
      </Box >
    </Box >
  )
}
