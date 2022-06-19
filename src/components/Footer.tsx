import Image from 'next/image'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

import logo from '../../public/copyright.svg'

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.primary"
      align="center"
      {...props}
    >
      {'Copyright © Gerd Müller'}{' '}
      <Link color="inherit" href="https://digitalwarenkombinat.de/">
        Digitalwarenkombinat
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

interface FooterProps {
  title: string
}

export const Footer = ({ title }: FooterProps) => (
  <Container
    maxWidth="lg"
    component="footer"
    sx={{
      borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      mt: 8,
      py: [3, 6],
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Typography variant="h6" color="text.primary" gutterBottom>
      {title}
    </Typography>
    <Image
      src={logo}
      alt={'Digitalwarenkombinat'}
      width={96}
      height={96}
    />

    <Copyright sx={{ mt: 5 }} />
  </Container>
)
