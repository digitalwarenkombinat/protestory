import Link from 'next/link'
import { useRouter } from 'next/router'

export default function CustomLink({ children, href }) {
  const router = useRouter()

  if (router.asPath === href) {
    return <>{children}</>
  }

  return href.startsWith('/') || href === '' ? (
    <Link href={href} passHref color="inherit" style={{ textDecoration: 'none' }}>
      {children}
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
      {children}
    </a>
  )
}
