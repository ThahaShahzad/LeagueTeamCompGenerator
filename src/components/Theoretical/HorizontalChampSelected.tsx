import { Box, GridItem, HStack } from '@chakra-ui/react'
import { roles, useTheoreticalContext } from 'lib/Context/TheoreticalContext'
import { useDrop } from 'react-dnd'

type roleNames = 'Top' | 'Jungle' | 'Mid' | 'Adc' | 'Support'

const ChampSelectedCard = ({ role }: { role: roleNames }) => {
  const { roles, setRoles } = useTheoreticalContext()
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: 'BOX',
    drop: () => ({ name: role }),
    // Props to collect
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }))
  return (
    <>
      <Box ref={drop} h={'full'} _notLast={{ borderRight: '2px' }} flex={1} textAlign={'center'}>
        {role} - {roles && roles[role]}
      </Box>
    </>
  )
}

const HorizontalChampSelected = () => {
  const roles = ['Top', 'Jungle', 'Mid', 'Adc', 'Support'] as roleNames[]
  return (
    <GridItem border={'2px'} borderRadius={'lg'} borderBottomRadius={0} mx={'20'}>
      <HStack h={'full'} justify={'space-evenly'}>
        {roles.map((role) => (
          <ChampSelectedCard key={role} {...{ role }} />
        ))}
      </HStack>
    </GridItem>
  )
}

export default HorizontalChampSelected
