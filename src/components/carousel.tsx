import React, { useState } from 'react';
import { Navigation, Swiper as InterfaceSwiper } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const CATEGORIES = [
  'Character Design',
  'Illustrations',
  // 'Storyboards',
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
    <div className="flex justify-center items-center flex-col h-80v">
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
        style={{ width: '100%' }}
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
          <p className="text-xs flex justify-end">Character Design</p>
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
          <p className="text-xs flex justify-end">Illustrations</p>
        </SwiperSlide>
        {/* <SwiperSlide>
          <Link to="/storyboards/">
            <StaticImage src="https://placekitten.com/800/800" alt="A kitten" />
          </Link>
          <Text fontSize="xs" align="end">
            Storyboards
          </Text>
        </SwiperSlide> */}
        <SwiperSlide>
          <Link to="/about-me/">
            <StaticImage src="../images/Icon_Reboot_1.png" alt="Onigiri" />
          </Link>
          <p className="text-xs flex justify-end">About me</p>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/webtoons/">
            <StaticImage
              src="../images/webtoons/igie_bannersaturated.jpg"
              alt="webtoon_ichie"
              width={800}
              height={800}
            />
          </Link>
          <p className="text-xs flex justify-end">Webtoons</p>
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-evenly w-3/4 m-10">
        <p className="text-m">
          {indexSelectedSlide} / {CATEGORIES.length}
        </p>
        <p className="text-5xl">{selectedSlide}</p>
      </div>
    </div>
  );
};

export default Carousel;
