import { Box, Flex, GridItem, HStack } from '@chakra-ui/react'

import ChampCard from 'components/custom/ChampCard'
import champions from 'public/LeagueChamps.json'

const AllChamps = () => {
  const tags = champions.map((champ) => champ.tags)
  console.log(tags)
  return (
    <GridItem display={'flex'} flexDir={'column'} border={'2px'} borderRadius={'lg'} mx={'20'} overflow={'auto'}>
      <Box borderBottom={'2px'} p={'2'}>
        Top bar filter/seacrh
      </Box>
      <Flex gap={'2'} p={'2'} wrap={'wrap'}>
        {champions.map((champ) => (
          <ChampCard key={champ.name} champName={champ.name} />
        ))}
      </Flex>
    </GridItem>
  )
}

export default AllChamps
