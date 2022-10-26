import { Box, GridItem, HStack } from '@chakra-ui/react'
import React from 'react'

const ChampSelectedTips = () => {
  return (
    <GridItem border={'2px'} borderTop={0} borderRadius={'lg'} borderTopRadius={0} mx={'20'}>
      <HStack h={'full'} justify={'space-evenly'}>
        {[...Array(5)].map((n, i) => (
          <Box key={i} h={'full'} _notLast={{ borderRight: '2px' }} flex={1} textAlign={'center'}></Box>
        ))}
      </HStack>
    </GridItem>
  )
}

export default ChampSelectedTips
