import Head from 'next/head'
import { Box, Heading } from '@chakra-ui/react'

// import champions from 'public/LeagueChamps.json'

const Generate = () => {
  // console.log(champions)
  return (
    <>
      <Head>
        <title>League Team Comp Generator - Generate</title>
        <meta name='description' content='League Team Comp Generator - Generate' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box as={'main'}>
        <Heading>Generate</Heading>
      </Box>
    </>
  )
}

export { getServerSideProps } from 'lib/chakraSSR'

export default Generate
