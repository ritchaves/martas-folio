import { FiInstagram } from 'react-icons/fi';
import { SiWebtoon } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import React from 'react';

const INSTAGRAM_MACCIRA = 'https://www.instagram.com/_maccira/';
const WEBTOON_MACCIRA =
  'https://www.webtoons.com/en/challenge/ichi-go-ichi-e-for-this-time-only-h/list?title_no=426568';
const LINKEDIN_MACCIRA =
  'https://www.linkedin.com/in/marta-ferreira-4723671b1/';

const SocialMediaIcons = (): JSX.Element => {
  const clickSocialMedia = (link: string) => () => window.open(link, '_blank');
  return (
    <div className="flex justify-end m-1">
      <FiInstagram
        size="27"
        style={{ margin: '0 5px', cursor: 'pointer' }}
        onClick={clickSocialMedia(INSTAGRAM_MACCIRA)}
      />
      <SiWebtoon
        size="27"
        style={{ margin: '0 5px', cursor: 'pointer' }}
        onClick={clickSocialMedia(WEBTOON_MACCIRA)}
      />
      <FaLinkedin
        size="27"
        style={{ margin: '0 5px', cursor: 'pointer' }}
        onClick={clickSocialMedia(LINKEDIN_MACCIRA)}
      />
    </div>
  );
};

export default SocialMediaIcons;
