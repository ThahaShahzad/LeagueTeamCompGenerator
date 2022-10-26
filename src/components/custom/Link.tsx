import NLink from 'next/link'
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import { MouseEventHandler, ReactNode } from 'react'

interface LinkProps {
  to: any
  key?: any
  className?: string
  chakraStyle?: ChakraLinkProps
  children?: ReactNode
  size?: 'sm' | 'md' | 'lg'
  variant?: 'line'
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined
}

export const Link: React.FC<LinkProps> = ({ to, key, className, chakraStyle, children, size, variant, onClick, ...props }) => {
  return (
    <NLink href={to} key={key ?? to} passHref>
      <ChakraLink key={key ?? to} className={className} {...chakraStyle} size={size} variant={variant} onClick={onClick} {...props}>
        {children}
      </ChakraLink>
    </NLink>
  )
}
