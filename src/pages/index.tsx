import type { NextPage } from 'next'
import Head from 'next/head'
import champions from 'public/LeagueChamps.json'

const Home: NextPage = () => {
  console.log(champions)
  return (
    <div>
      <Head>
        <title>League Team Comp Generator</title>
        <meta name='description' content='League Team Comp Generator' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h2>League Team Comp Generator</h2>
      </main>
    </div>
  )
}

export default Home
