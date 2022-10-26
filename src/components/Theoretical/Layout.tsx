import { Grid } from '@chakra-ui/react'
interface props {
  children: React.ReactNode
}
const Layout: React.FC<props> = ({ children }) => {
  return <Grid>{children}</Grid>
}

export default Layout
