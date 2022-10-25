import { Box, Heading } from '@chakra-ui/react'
import type { NextPageWithLayout } from './_app'
import Head from 'next/head'
import champions from 'public/LeagueChamps.json'
import { ReactElement } from 'react'
import HomeLayout from 'components/layouts/homeLayout'

const Home: NextPageWithLayout = () => {
  console.log(champions)
  return (
    <>
      <Head>
        <title>League Team Comp Generator</title>
        <meta name='description' content='League Team Comp Generator' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box as={'main'}>
        <Heading>League Team Comp Generator</Heading>
      </Box>
    </>
  )
}
Home.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>
}

export { getServerSideProps } from 'lib/chakraSSR'

export default Home
