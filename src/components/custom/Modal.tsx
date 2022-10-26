import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ResponsiveValue
} from '@chakra-ui/react'
import { useMyColors } from 'styles/colors'

interface props {
  isOpen: boolean
  onClose: () => void
  onCloseAction?: () => void

  size?: ResponsiveValue<'sm' | 'md' | 'lg' | 'xl' | '2xl' | (string & {}) | 'xs' | '3xl' | '4xl' | '5xl' | '6xl' | 'full'> | undefined

  title: string
  body?: React.ReactNode
  footer?: React.ReactNode
}

const Modal: React.FC<props> = ({ isOpen, onClose, onCloseAction, size, title, body, footer }) => {
  const { bg } = useMyColors()
  return (
    <ChakraModal
      closeOnEsc={false}
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      size={size}
      scrollBehavior={'inside'}
      isCentered={true}
    >
      <ModalOverlay />
      <ModalContent bg={bg}>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton onClick={onCloseAction} />
        <ModalBody>{body}</ModalBody>
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContent>
    </ChakraModal>
  )
}

export default Modal
