import {
  Flex,
  Text,
  Divider,
  Box,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
  ModalContent,
  ModalBody,
  Tooltip,
} from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';

function Skill(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Tooltip label="skill and lore">
        <InfoIcon
          ml={5}
          cursor="pointer"
          w={7}
          h={7}
          transform="translateY(5px)"
          color="blue.400"
          transition="0.3s"
          _hover={{ transform: 'scale(1.2)' }}
          onClick={onOpen}
        />
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="rgba(0,0,0,0)" boxShadow="none" borderRadius={30}>
          <ModalCloseButton color="white" zIndex={3} top="4" />
          <ModalHeader
            fontWeight="normal"
            fontSize="2xl"
            borderRadius={20}
            zIndex={2}
            backgroundColor="red"
            color="white"
            textAlign="center"
          >
            {props.name}
          </ModalHeader>
          <ModalBody>
            <Flex
              py={5}
              px={10}
              fontSize="lg"
              borderRadius="0px 0px 20px 20px"
              mt="-10px"
              backgroundColor="white"
              flexDir="column"
              justifyContent="center"
            >
              <Text color="blue" align="left">
                Skill :
              </Text>
              <Text>{props.desc}</Text>
              <Box>
                <Divider my={{ md: 3 }} />
                <Text color="blue" align="left">
                  Lore :
                </Text>
                <Text>{props.lore}</Text>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Skill;
