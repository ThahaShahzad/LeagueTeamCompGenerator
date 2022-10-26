import Head from 'next/head'

import TheoreticalComponent from 'components/Theoretical'

const Theoretical = () => {
  return (
    <>
      <Head>
        <title>League Team Comp Generator - Theoretical</title>
        <meta name='description' content='League Team Comp Generator - Theoretical' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <TheoreticalComponent />
    </>
  )
}

export { getServerSideProps } from 'lib/chakraSSR'

export default Theoretical
