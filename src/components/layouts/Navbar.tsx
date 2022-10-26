import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { Image, Link } from 'components/custom'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import { useMyColors } from 'styles/colors'

const Navbar = () => {
  const { asPath } = useRouter()
  const { primaryTint } = useMyColors()
  const currPath = asPath
  const links = [
    { linkText: 'Theoretical', linkRoute: '/' },
    { linkText: 'Live', linkRoute: '/live' },
    { linkText: 'Generate', linkRoute: '/generate' }
  ]
  return (
    <Box as={'nav'} bg={primaryTint} display={'flex'} flex={1} justifyContent={'space-between'} alignItems={'center'} h='full' py={'4'} px={'20'}>
      <Link chakraStyle={{ display: 'flex', alignItems: 'center', ml: '3' }} to='/landing'>
        {/* <Image src={logo.logoImg} alt='logo' /> */}
        <Heading size='lg' ml='2'>
          {/* {logo.logoText} */}
          LTCG
        </Heading>
      </Link>
      <Box display={'flex'} alignItems={'center'} gap={'12'}>
        {links.map((link, index) => (
          <Box key={index}>
            <Link to={link.linkRoute}>
              <Button size={'lg'} variant={`${link.linkRoute === asPath ? 'solid' : 'outline'}`}>
                {link.linkText}
              </Button>
            </Link>
          </Box>
        ))}
      </Box>
      <div></div>
    </Box>
  )
}

export default Navbar
