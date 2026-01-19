import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-yellow-500 dark:hover:text-yellow-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-lime-100 pt-10 pb-16 dark:border-lime-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-lime-800 dark:text-lime-200">
                <NavLink href="/floral-park">Floral Park</NavLink>
                <NavLink href="/dahlias">Dusty's Dahlias</NavLink>
                <NavLink href="/nursery">Nursery</NavLink>
                <NavLink href="/articles">News</NavLink>
                <NavLink href="/about">About</NavLink>
              </div>
              <p className="text-sm text-lime-400 dark:text-lime-500">
                &copy; {new Date().getFullYear()} Hues Flower Farm &amp; Nursery. All rights
                reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
