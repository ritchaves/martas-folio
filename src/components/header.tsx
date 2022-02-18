import React from 'react';
import Onigiri from '../images/Icon_Reboot_1.png';
import { Link } from 'gatsby';
import SocialMediaIcons from './social-media-icons';

const Header = (): JSX.Element => {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center pl-4">
        <img
          className="inline-block h-[50px] w-[50px] rounded-full ring-2 ring-white mb-1"
          src={Onigiri}
          alt="avatar-maccira"
        />
        <h1 className="m-5 text-4xl">Marta Ferreira</h1>
      </Link>
      <div className="mb-3">
        <SocialMediaIcons />
      </div>
    </div>
  );
};

export default Header;
