import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { ChakraProvider, cookieStorageManagerSSR, localStorageManager } from '@chakra-ui/react'

// import RootContext from 'lib/context/RootContext'
import theme from 'styles/chakraTheme'
import AppLayout from 'components/layouts/AppLayout'
// import '@fontsource/open-sans/600.css'
// import '@fontsource/amiko/700.css'

type Page<P = {}> = NextPage<P> & {
  getLayout?: any
}

type Props = AppProps & {
  Component: Page
  pageProps: any
}

type props = {
  children: React.ReactNode
}
const EmptyLayout: React.FC<props> = ({ children }) => {
  return <>{children}</>
}

function MyApp({ Component, pageProps }: Props) {
  const Layout = Component.getLayout || EmptyLayout
  const colorModeManager = typeof pageProps.cookies === 'string' ? cookieStorageManagerSSR(pageProps.cookies) : localStorageManager
  return (
    // <RootContext layout={Component.getLayout}>
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      <DndProvider backend={HTML5Backend}>
        <AppLayout>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppLayout>
      </DndProvider>
    </ChakraProvider>
    // </RootContext>
  )
}
export default MyApp
