import React, { useState } from 'react';
import { Navigation, Swiper as InterfaceSwiper } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { StaticImage } from 'gatsby-plugin-image';
import { Fade, Flex, Text } from '@chakra-ui/react';
import { Link } from 'gatsby';

const CATEGORIES = [
  'Character Design',
  'Illustrations',
  'Storyboards',
  'About me',
  'Webtoons',
];

const Carousel = (): JSX.Element => {
  const [selectedSlide, setSelectedSlide] = useState(CATEGORIES[0]);
  const [indexSelectedSlide, setSelectedIndex] = useState(1);

  const changeSelectedSlide = (e: InterfaceSwiper) => {
    const index = e.realIndex;
    setSelectedSlide(CATEGORIES[index]);
    setSelectedIndex(index + 1);
  };

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        modules={[Navigation]}
        effect="slide"
        loop
        slideToClickedSlide={false}
        navigation
        centeredSlides
        onSlideChange={(e) => changeSelectedSlide(e)}
        style={{ marginTop: '80px' }}
      >
        <SwiperSlide>
          <Link to="/character-design/">
            <StaticImage
              src="../images/CharDesign_banner.png"
              alt="Vampire character design"
              height={800}
              width={800}
            />
          </Link>
          <Text fontSize="xs" align="end">
            Character Design
          </Text>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/illustrations/">
            <StaticImage
              src="../images/Illustration_banner.png"
              alt="Illustration Linear Perpective"
              height={800}
              width={800}
            />
          </Link>
          <Text fontSize="xs" align="end">
            Illustrations
          </Text>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/storyboards/">
            <StaticImage src="https://placekitten.com/800/800" alt="A kitten" />
          </Link>
          <Text fontSize="xs" align="end">
            Storyboards
          </Text>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/about-me/">
            <StaticImage src="../images/Icon_Reboot_1.png" alt="Onigiri" />
          </Link>
          <Text fontSize="xs" align="end">
            About me
          </Text>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/webtoons/">
            <StaticImage src="https://placekitten.com/800/800" alt="A kitten" />
          </Link>
          <Text fontSize="xs" align="end">
            Webtoons
          </Text>
        </SwiperSlide>
      </Swiper>
      <Flex paddingLeft="350" paddingRight="350" justify="space-between">
        <Text align="start" margin="35" fontSize="larger">
          {indexSelectedSlide} / 5
        </Text>
        <Fade in={Boolean(selectedSlide)}>
          <Text align="end" margin="35" fontSize="5xl">
            {selectedSlide}
          </Text>
        </Fade>
      </Flex>
    </>
  );
};

export default Carousel;
