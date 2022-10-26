import Head from 'next/head'
import { Box, Heading } from '@chakra-ui/react'

// import champions from 'public/LeagueChamps.json'

const Live = () => {
  // console.log(champions)
  return (
    <>
      <Head>
        <title>League Team Comp Generator - Live</title>
        <meta name='description' content='League Team Comp Generator - Live' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box as={'main'}>
        <Heading>Live</Heading>
      </Box>
    </>
  )
}

export { getServerSideProps } from 'lib/chakraSSR'

export default Live
