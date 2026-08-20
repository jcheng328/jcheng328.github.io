import Link from './Link'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer className="mt-16 flex flex-wrap items-center justify-center gap-x-2 px-6 py-5 text-xs text-gray-500 dark:text-gray-400">
      <span>
        © {new Date().getFullYear()} <Link href="/">{siteMetadata.title}</Link>
      </span>
      <span>
        Powered by <Link href="https://nextjs.org/">Next.js</Link> &amp;{' '}
        <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
          Tailwind Nextjs Blog
        </Link>
      </span>
    </footer>
  )
}
