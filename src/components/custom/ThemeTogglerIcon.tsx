import { Flex, FormLabel, Icon, Switch, useColorMode } from '@chakra-ui/react'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'

const ThemeTogglerIcon = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Flex w={'full'} justify={'center'} align={'center'}>
        <FormLabel htmlFor='email-alerts' mb='0'>
          <Icon as={BsSunFill} />
        </FormLabel>
        <Switch isChecked={colorMode === 'light' ? false : true} onChange={() => toggleColorMode()}></Switch>
        <FormLabel htmlFor='email-alerts' mb='0' ml={'12px'} mr={0}>
          <Icon as={BsMoonFill} />
        </FormLabel>
      </Flex>
    </>
  )
}

export default ThemeTogglerIcon
