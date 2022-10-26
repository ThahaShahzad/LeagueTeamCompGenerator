import { Button, Grid, GridItem, useDisclosure } from '@chakra-ui/react'
import AllChamps from 'components/custom/AllChamps'
import { TheoreticalContextProvider } from 'lib/Context/TheoreticalContext'

import ChampSelectedTips from './ChampSelectedTips'
import HorizontalChampSelected from './HorizontalChampSelected'
import ResultsModal from './ResultsModal'

const TheoreticalComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Grid as={'section'} gridTemplateColumns={'auto'} gridTemplateRows={'repeat(2, 1fr) 7% repeat(1, 1fr)'} p={'4'} pb={'2'}>
      <TheoreticalContextProvider>
        <ResultsModal {...{ isOpen, onClose }} />
        <HorizontalChampSelected />
        <ChampSelectedTips />
        <GridItem py={'2'} display={'flex'} justifyContent={'center'}>
          <Button onClick={() => onOpen()}>Results</Button>
        </GridItem>
        <AllChamps />
      </TheoreticalContextProvider>
    </Grid>
  )
}

export default TheoreticalComponent
