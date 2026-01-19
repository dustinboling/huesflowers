'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'

function HuesLogo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 117.4 34.5" aria-hidden="true" {...props}>
      <path
        d="M116.8,15.4h0c-1.5-1.6-3.2-2-5.2-2s-3.7.1-5.2.4c-2.3.3-4.6,1-6.8,1.7-.5.2-1,.3-1.5.5-.2,0-.6.2-1,.3-.2,0-.3.1-.4.1-5.6,1.9-13.7,5-19.8,10,0-.6-.1-1.1-.2-1.7-.2-1.7-.4-3.5-.4-5.2s.5-5.4,2.2-5.4,1,.6,1.1,1.1v.7c.1.4.2,1.1.8,1.1s.6-.3.6-.7-.1-1.1-.3-1.6c-.3-.9-1.1-1.9-2.3-1.9-3.3,0-3.4,5.6-3.4,6.7s0,.5,0,.7c-.2.2-.5.5-.7.7-1.1,1.1-2.3,2.2-3.4,3.2-1.1,1-2.2,1.8-3.5,2.5-.7.3-1.3.6-2.1.8-.9.1-1.4-.2-1.6-1.1-.2-.5-.3-1.1-.1-1.7,0-.2.1-.4.4-.4,2-.2,3.3-1.6,4.5-2.9.6-.7,1.1-1.5,1.2-2.5.1-1.2-.6-1.9-1.8-1.7-1,.1-1.7.7-2.4,1.3-.7.7-1.2,1.4-1.7,2.2-.1.1-.2.2-.3.4-1.1,1.2-2.2,2.4-3.5,3.4-.6.5-1.2.9-2,1.2-.8.3-1.2,0-1.3-.7,0-.5,0-1,0-1.4.1-1.5.4-3,.9-4.4.1-.5.2-.9.3-1.4s0-.5-.3-.6c-.3-.1-.5,0-.7,0-.5.4-.9.9-1.3,1.3-1.4,1.6-2.8,3.2-4.5,4.6-.5.4-1,.7-1.5,1.1-.2.1-.4.3-.6.1-.2,0-.2-.3-.2-.5.2-1.5.6-2.9,1.3-4.2.2-.3.4-.6.4-.7,0,0,.1-.2.2-.3.2-.3.2-.6-.1-.8-.3-.2-.6-.2-.9.1l-.4.5s0,.1,0,.2c0,.1-.2.2-.3.4,0,.1-.2.3-.3.4-1,1.3-3.4,4.4-5,4.4s-1.8-1.2-2.2-1.8c-.1-.2-.3-.6-.4-.9-.5-1.2-1.2-2.9-2.5-2.9s-2.9,2.3-4.4,6.9c0-1.2.2-2.3.4-3.3l.9-5.3v-.4c.3-1.3.6-2.7,1-4h0c3.2-3.2,5.3-6.1,6.4-9.2,0,0,0-.2.1-.3.2-.5.4-1,.4-1.5S42.7,0,42.1,0s-.9.2-1.3.5h-.1c-2.1,1.6-3.7,5.4-4.3,6.9-.2.7-.5,1.3-.7,2-.2.6-.4,1.2-.6,1.8-3,3.2-6.9,4.6-10.6,5.9-2.3.8-4.4,1.4-6.5,1.7-1.2.2-2.4.4-3.6.6-1.6.2-3.2.5-4.8.8-.2,0-.4,0-.7.1-1.8.3-3.6.6-5.2,1.4-.9.4-1.7,1-2.6,1.8,0,0-.7.5-.8.6-.2.1-.4.3-.4.6s.3.6.6.6.3,0,.5-.2c.2-.1.3-.3.5-.4.7-.6,1.4-1.1,2.2-1.6,1.3-.8,4.8-1.6,6.3-1.7,1.1-.2,5.7-.9,6.7-1,1.8-.3,3.3-.6,4.6-.9,1.8-.5,3.4-1.1,5.2-1.7l.5-.2c3.2-1.1,5-2.1,7.4-4.1l-.3,1.7c0,.2-.2,1.1-1,5.9-.6,3.2-.7,6.5-.7,10.5h0c0,.4.3.6.6.6s.5-.1.6-.6c.8-4.2,1.6-7.5,3.5-10.8h0c.2-.5.8-1.4,1.1-1.4s.8.7,1,1.2c0,0,0,.1,0,.2.5,1.7,2.1,4.2,4.1,4.2s3.1-1.5,4.1-2.5c0,0,0,0,0,0-.1.5-.2,1-.2,1.5,0,.4,0,.8,0,1.1.1.8.8,1.2,1.5.9.5-.2.9-.5,1.3-.8,1.2-.8,2.2-1.7,3.2-2.7.5-.4.9-.9,1.3-1.3s.3-.5.6-.4c.3,0,.1.4.1.7-.1.9-.2,1.9-.3,2.5,0,.9,0,1.4.1,1.9.3,1.1,1,1.5,2.1,1.3.4,0,.8-.2,1.2-.3.7-.3,1.2-.7,1.8-1.1.7-.5,1.3-1.1,1.9-1.7-.1.5-.2,1-.2,1.5,0,.5.1,1.1.3,1.6.3,1.1,1.2,1.8,2.5,1.8s1.7-.3,2.4-.6c1.2-.6,2.4-1.3,3.4-2.2,1.5-1.2,2.9-2.5,4.2-3.9,0,.4,0,.9.1,1.3,0,.4.1.8.2,1.2.1,1,.3,2,.3,2.9h0c-1,1.2-3.4,3.6-3.4,5.5s.7,1.9,1.7,1.9c1.7,0,2.6-2.7,2.8-4.1,0-.6.1-1.3.1-1.9,0-.2,0-.4,0-.6.3-.3.6-.6,1-.8.2-.1.3-.2.5-.4,6.3-4.8,14.5-7.8,18.9-9.2l4.7-1.4c3.5-1,6.2-1.4,9.6-1.4s3.5.2,4.5,1.8c0,0,0,.2.1.3.1.2.2.5.6.5s.6-.2.6-.6-.3-1-.6-1.3ZM67.1,18.5h0c.2-.1.6-.3.9-.3.2,0,.4,0,.4.4,0,.4-.2.7-.4,1.1-.8,1.3-2,2.2-3.4,2.9,0,0-.2,0-.3,0,0,0,0-.1,0-.2.6-1.5,1.5-2.9,2.9-3.8ZM37,9.2h0c.7-2,2.3-6.6,4.8-7.9,0,0,0,0,0,0-1,3.2-3.1,5.9-4.8,7.9h0ZM74.6,32.8c-.2.2-.4.5-.6.5s-.5-.3-.5-.6c0-.9,1.3-2.7,2.2-3.6,0,1.3-.3,2.9-1.1,3.7Z"
        fill="inherit"
        stroke="none"
      />
    </svg>
  )
}

function CloseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SunIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </svg>
  )
}

function MoonIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <li>
      <PopoverButton as={Link} href={href} className="block py-2">
        {children}
      </PopoverButton>
    </li>
  )
}

function MobileNavigation(
  props: React.ComponentPropsWithoutRef<typeof Popover>,
) {
  return (
    <Popover {...props}>
      <PopoverButton className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-lime-800 shadow-lg ring-1 shadow-lime-800/5 ring-lime-900/5 backdrop-blur-sm dark:bg-lime-800/90 dark:text-lime-200 dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-lime-500 group-hover:stroke-lime-700 dark:group-hover:stroke-lime-400" />
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 z-50 bg-lime-800/40 backdrop-blur-xs duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in dark:bg-black/80"
      />
      <PopoverPanel
        focus
        transition
        className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-lime-900/5 duration-150 data-closed:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in dark:bg-lime-900 dark:ring-lime-800"
      >
        <div className="flex flex-row-reverse items-center justify-between">
          <PopoverButton aria-label="Close menu" className="-m-1 p-1">
            <CloseIcon className="h-6 w-6 text-lime-500 dark:text-lime-400" />
          </PopoverButton>
          <h2 className="text-sm font-medium text-lime-600 dark:text-lime-400">
            Navigation
          </h2>
        </div>
        <nav className="mt-6">
          <ul className="-my-2 divide-y divide-lime-100 text-base text-lime-800 dark:divide-lime-100/5 dark:text-lime-300">
            <MobileNavItem href="/floral-park">Hues Floral Park</MobileNavItem>
            <MobileNavItem href="/dahlias">Dusty's Dahlias</MobileNavItem>
            <MobileNavItem href="/nursery">Nursery</MobileNavItem>
            <MobileNavItem href="/articles">News</MobileNavItem>
            <MobileNavItem href="/about">About</MobileNavItem>
          </ul>
        </nav>
      </PopoverPanel>
    </Popover>
  )
}

function NavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  let isActive = usePathname() === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-yellow-500 dark:text-yellow-400'
            : 'hover:text-yellow-500 dark:hover:text-yellow-400',
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-linear-to-r from-yellow-500/0 via-yellow-500/40 to-yellow-500/0 dark:from-yellow-400/0 dark:via-yellow-400/40 dark:to-yellow-400/0" />
        )}
      </Link>
    </li>
  )
}

function DesktopNavigation(props: React.ComponentPropsWithoutRef<'nav'>) {
  return (
    <nav {...props}>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium whitespace-nowrap text-lime-800 shadow-lg ring-1 shadow-lime-800/5 ring-lime-900/5 backdrop-blur-sm dark:bg-lime-800/90 dark:text-lime-200 dark:ring-white/10">
        <NavItem href="/floral-park">Floral Park</NavItem>
        <NavItem href="/dahlias">Dusty's Dahlias</NavItem>
        <NavItem href="/nursery">Nursery</NavItem>
        <NavItem href="/articles">News</NavItem>
        <NavItem href="/about">About</NavItem>
      </ul>
    </nav>
  )
}

function ThemeToggle() {
  let { resolvedTheme, setTheme } = useTheme()
  let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
  let [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : 'Toggle theme'}
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg ring-1 shadow-lime-800/5 ring-lime-900/5 backdrop-blur-sm transition dark:bg-lime-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={() => setTheme(otherTheme)}
    >
      <SunIcon className="h-6 w-6 fill-lime-100 stroke-lime-500 transition group-hover:fill-lime-200 group-hover:stroke-lime-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-yellow-50 [@media(prefers-color-scheme:dark)]:stroke-yellow-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-yellow-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-yellow-600" />
      <MoonIcon className="hidden h-6 w-6 fill-lime-700 stroke-lime-500 transition not-[@media_(prefers-color-scheme:dark)]:fill-yellow-400/10 not-[@media_(prefers-color-scheme:dark)]:stroke-yellow-500 dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-lime-400" />
    </button>
  )
}

function clamp(number: number, a: number, b: number) {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}

function LogoContainer({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(className, 'h-10 w-auto bg-transparent p-0.5')}
      {...props}
    />
  )
}

function Logo({
  large = false,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href'> & {
  large?: boolean
}) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, 'pointer-events-auto')}
      {...props}
    >
      <HuesLogo
        className={clsx('fill-lime-600 dark:fill-lime-400', large ? 'h-16 w-auto' : 'h-9 w-auto')}
      />
    </Link>
  )
}

export function Header() {
  let isHomePage = usePathname() === '/'

  let headerRef = useRef<React.ElementRef<'div'>>(null)
  let avatarRef = useRef<React.ElementRef<'div'>>(null)
  let isInitial = useRef(true)

  useEffect(() => {
    let downDelay = avatarRef.current?.offsetTop ?? 0
    let upDelay = 64

    function setProperty(property: string, value: string) {
      document.documentElement.style.setProperty(property, value)
    }

    function removeProperty(property: string) {
      document.documentElement.style.removeProperty(property)
    }

    function updateHeaderStyles() {
      if (!headerRef.current) {
        return
      }

      let { top, height } = headerRef.current.getBoundingClientRect()
      let scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight,
      )

      if (isInitial.current) {
        setProperty('--header-position', 'sticky')
      }

      setProperty('--content-offset', `${downDelay}px`)

      if (isInitial.current || scrollY < downDelay) {
        setProperty('--header-height', `${downDelay + height}px`)
        setProperty('--header-mb', `${-downDelay}px`)
      } else if (top + height < -upDelay) {
        let offset = Math.max(height, scrollY - upDelay)
        setProperty('--header-height', `${offset}px`)
        setProperty('--header-mb', `${height - offset}px`)
      } else if (top === 0) {
        setProperty('--header-height', `${scrollY + height}px`)
        setProperty('--header-mb', `${-scrollY}px`)
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setProperty('--header-inner-position', 'fixed')
        removeProperty('--header-top')
        removeProperty('--avatar-top')
      } else {
        removeProperty('--header-inner-position')
        setProperty('--header-top', '0px')
        setProperty('--avatar-top', '0px')
      }
    }

    function updateAvatarStyles() {
      if (!isHomePage) {
        return
      }

      let fromScale = 1
      let toScale = 36 / 64
      let fromX = 0
      let toX = 2 / 16

      let scrollY = downDelay - window.scrollY

      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale
      scale = clamp(scale, fromScale, toScale)

      let x = (scrollY * (fromX - toX)) / downDelay + toX
      x = clamp(x, fromX, toX)

      setProperty(
        '--avatar-image-transform',
        `translate3d(${x}rem, 0, 0) scale(${scale})`,
      )

      let borderScale = 1 / (toScale / scale)
      let borderX = (-toX + x) * borderScale
      let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`

      setProperty('--avatar-border-transform', borderTransform)
      setProperty('--avatar-border-opacity', scale === toScale ? '1' : '0')
    }

    function updateStyles() {
      updateHeaderStyles()
      updateAvatarStyles()
      isInitial.current = false
    }

    updateStyles()
    window.addEventListener('scroll', updateStyles, { passive: true })
    window.addEventListener('resize', updateStyles)

    return () => {
      window.removeEventListener('scroll', updateStyles)
      window.removeEventListener('resize', updateStyles)
    }
  }, [isHomePage])

  return (
    <>
      <header
        className="pointer-events-none relative z-50 flex flex-none flex-col"
        style={{
          height: 'var(--header-height)',
          marginBottom: 'var(--header-mb)',
        }}
      >
        {isHomePage && (
          <>
            <div
              ref={avatarRef}
              className="order-last mt-[calc(--spacing(16)-(--spacing(3)))]"
            />
            <Container
              className="top-0 order-last -mb-3 pt-3"
              style={{
                position:
                  'var(--header-position)' as React.CSSProperties['position'],
              }}
            >
              <div
                className="top-(--avatar-top,--spacing(3)) w-full"
                style={{
                  position:
                    'var(--header-inner-position)' as React.CSSProperties['position'],
                }}
              >
                <div className="relative">
                  <LogoContainer
                    className="absolute top-3 left-0 origin-left transition-opacity"
                    style={{
                      opacity: 'var(--avatar-border-opacity, 0)',
                      transform: 'var(--avatar-border-transform)',
                    }}
                  />
                  <Logo
                    large
                    className="block h-16 w-auto origin-left"
                    style={{ transform: 'var(--avatar-image-transform)' }}
                  />
                </div>
              </div>
            </Container>
          </>
        )}
        <div
          ref={headerRef}
          className="top-0 z-10 h-16 pt-6"
          style={{
            position:
              'var(--header-position)' as React.CSSProperties['position'],
          }}
        >
          <Container
            className="top-(--header-top,--spacing(6)) w-full"
            style={{
              position:
                'var(--header-inner-position)' as React.CSSProperties['position'],
            }}
          >
            <div className="relative flex gap-4">
              <div className="flex flex-1">
                {!isHomePage && (
                  <LogoContainer>
                    <Logo />
                  </LogoContainer>
                )}
              </div>
              <div className="flex flex-1 justify-end md:justify-center">
                <MobileNavigation className="pointer-events-auto md:hidden" />
                <DesktopNavigation className="pointer-events-auto hidden md:block" />
              </div>
              <div className="flex justify-end md:flex-1">
                <div className="pointer-events-auto">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
      {isHomePage && (
        <div
          className="flex-none"
          style={{ height: 'var(--content-offset)' }}
        />
      )}
    </>
  )
}
