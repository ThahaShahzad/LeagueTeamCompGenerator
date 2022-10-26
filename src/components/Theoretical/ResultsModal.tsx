import { Box, useToast } from '@chakra-ui/react'
import Modal from 'components/custom/Modal'
import { roles, useTheoreticalContext } from 'lib/Context/TheoreticalContext'

interface props {
  isOpen: boolean
  onClose: () => void
}

const ResultsModal: React.FC<props> = ({ isOpen, onClose }) => {
  const { roles } = useTheoreticalContext()
  return (
    <Modal
      title={`results`}
      size={'5xl'}
      body={
        <Box p={'12'} experimental_spaceY={'8'}>
          {JSON.stringify(roles)}
        </Box>
      }
      {...{
        isOpen,
        onClose
      }}
    />
  )
}

export default ResultsModal
