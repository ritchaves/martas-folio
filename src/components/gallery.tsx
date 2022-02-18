import React from 'react';

const Gallery = ({
  photos,
  handleModal,
}: {
  photos: { src: string }[];
  handleModal: (src: string) => void;
}): JSX.Element => {
  return (
    <div className="md:columns-3 sm:columns-2 xs:columns-1 gap-3 p-10">
      {photos.map(({ src }, idx) => (
        <img
          src={src}
          key={`idx${idx}`}
          className="inline-block w-full h-fit m-2"
          onClick={() => handleModal(src)}
        />
      ))}
    </div>
  );
};

export default Gallery;
