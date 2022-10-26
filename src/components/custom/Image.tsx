import { chakra, StyleProps } from '@chakra-ui/system'
import NImage, { ImageProps } from 'next/image'

const Img = chakra(NImage, {
  shouldForwardProp: (prop) => {
    return ['width', 'height', 'src', 'alt'].includes(prop)
  }
})
type props = StyleProps & ImageProps

export const Image = (props: props) => {
  return <Img {...props} />
}
