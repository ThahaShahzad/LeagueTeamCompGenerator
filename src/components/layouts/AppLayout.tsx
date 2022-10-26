import { Grid, GridItem } from '@chakra-ui/react'

import Navbar from './Navbar'

interface props {
  children: React.ReactNode
}
const AppLayout: React.FC<props> = ({ children }) => {
  return (
    <Grid as={'main'} h='100vh' gridTemplateColumns={'auto'} gridTemplateRows={'8% 92%'}>
      <Navbar />

      {/* <Layout>
            <Component {...pageProps} />
          </Layout> */}
      {children}
    </Grid>
  )
}

export default AppLayout
