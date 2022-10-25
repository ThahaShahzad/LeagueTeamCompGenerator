import { Flex, Switch, Text, useColorMode } from '@chakra-ui/react'

const ThemeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex w={'full'} justify={'space-between'} align={'center'}>
      <Text fontSize={'lg'}>{colorMode === 'dark' ? 'Light mode' : 'Dark mode'}</Text>
      <Switch isChecked={colorMode === 'light' ? false : true} onChange={() => toggleColorMode()}></Switch>
    </Flex>
  )
}

export default ThemeToggler
