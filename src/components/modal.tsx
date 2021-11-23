import React from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  ModalContent,
} from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

function ModalPictures({
  path,
  name,
}: {
  path: string;
  name: string;
}): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <StaticImage src={path} alt={name} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </>
  );
}
export default ModalPictures;
