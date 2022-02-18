import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Header from '../components/header';
import SocialMediaIcons from '../components/social-media-icons';

const AboutMeText = ({ children }: { children: string }) => {
  return (
    <p className="text-lg p-2 m-3 bg-[#FAEFE9] ml-auto w-fit">{children}</p>
  );
};

const AboutMe = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center lg:h-80v p-20 lg:flex-row xs:flex-col relative">
        <div className="flex flex-col lg:ml-500">
          <StaticImage
            src="../images/Icon_Reboot_1.png"
            alt="maccira"
            width={500}
          />
          <SocialMediaIcons />
        </div>
        <div className="leading-loose z-10 lg:absolute xs:relative lg:-ml-400">
          <AboutMeText>Hello!</AboutMeText>
          <AboutMeText>
            My name is Marta Ferreira, although I more commonly go by my artist
            name "maccira" online.
          </AboutMeText>
          <AboutMeText>
            I'm a portuguese artist currently attending first year at Sheridan
            Animation in Oakville, Canada.
          </AboutMeText>
          <AboutMeText>
            My passions lay mainly in Storyboarding and Layout, but I strive to
            improve in all areas that I can.
          </AboutMeText>
          <AboutMeText>
            Above all, I love storytelling and using art as a medium for it,
            which I hope shows in all my pieces!
          </AboutMeText>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
