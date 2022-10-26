import { Box, VStack } from '@chakra-ui/react'
import { useTheoreticalContext } from 'lib/Context/TheoreticalContext'
import { useDrag } from 'react-dnd'

interface props {
  champName: string
}

interface DropResult {
  name: string
}

const ChampCard: React.FC<props> = ({ champName }: props) => {
  const { roles, setRoles } = useTheoreticalContext()
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    // "type" is required. It is used by the "accept" specification of drop targets.
    type: 'BOX',
    item: { champName },
    // The collect function utilizes a "monitor" instance (see the Overview for what this is)
    // to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>()
      if (item && dropResult) {
        setRoles((prevState) => {
          return { ...prevState, [dropResult.name]: item.champName }
        })
      }
    }
  }))
  return (
    <Box ref={dragPreview} w={'200px'} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <Box h={'90px'} border={'2px'} p={'4'} role='Handle' ref={drag}>
        {/* img */}
        {champName}
      </Box>
    </Box>
  )
}

export default ChampCard
