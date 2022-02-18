import React, { useState } from 'react';
import Header from '../components/header';
import photos from '../utils/photo-char-design';
import Gallery from '../components/gallery';
import ModalPictures from '../components/modal';

const CharacterDesign = (): JSX.Element => {
  const [openPicture, setOpenPicture] = useState<string>('');

  const handleModal = (src: string) => {
    setOpenPicture(src);
  };

  return (
    <>
      {Boolean(openPicture) && (
        <ModalPictures
          setOpenPicture={setOpenPicture}
          openPicture={openPicture}
        />
      )}
      <Header />
      <Gallery photos={photos} handleModal={handleModal} />
    </>
  );
};

export default CharacterDesign;
