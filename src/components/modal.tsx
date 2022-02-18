import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

function ModalPictures({
  openPicture,
  setOpenPicture,
}: {
  openPicture: string;
  setOpenPicture: (src: string) => void;
}): JSX.Element {
  return (
    <div className="z-20">
      {/* <StaticImage src={openPicture} alt="picture-zoomed" /> */}
    </div>
  );
}

export default ModalPictures;
