import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import { ChakraProvider, cookieStorageManagerSSR, localStorageManager } from '@chakra-ui/react'

import theme from 'styles/chakraTheme'
// import '@fontsource/open-sans/600.css'
// import '@fontsource/amiko/700.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  pageProps: any
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
  const colorModeManager =
    typeof pageProps.cookies === 'string' ? cookieStorageManagerSSR(pageProps.cookies) : localStorageManager

  return getLayout(
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
