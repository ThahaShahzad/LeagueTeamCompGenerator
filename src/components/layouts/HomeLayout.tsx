import { Box } from '@chakra-ui/react'

import { Navbar, Footer } from 'components/layouts'

interface props {
  children: React.ReactNode
}
const HomeLayout: React.FC<props> = ({ children }) => {
  return (
    <Box as={'main'} p={'10'}>
      <Navbar />
      {children}
      <Footer />
    </Box>
  )
}

export default HomeLayout
