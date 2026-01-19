import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  InstagramIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/dusty.jpeg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-lime-800 transition hover:text-yellow-500 dark:text-lime-200 dark:hover:text-yellow-500"
      >
        <Icon className="h-6 w-6 flex-none fill-lime-500 transition group-hover:fill-yellow-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Dusty Hues. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-lime-100 object-cover dark:bg-lime-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-lime-800 sm:text-5xl dark:text-lime-100">
            I’m Dusty. The founder and farmer of Hues.
          </h1>
          <div className="mt-6 space-y-7 text-base text-lime-600 dark:text-lime-400">
            <p>
              My passion for growing plants started in my teens when I dreamed of working at a local nursery, or as a landscape architect.
            </p>
            <p>
              Starting in middle school, my family took an annual trip down to my Aunt and Uncle's in Camarillo, California for a large family reunion at Disneyland. Later, in my college years, I found myself in Orange County, California. I was soon hired as a cast member at Disneyland as a Jungle Cruise Skipper.
            </p>
            <p>
              For the past 20+ years, Walt Disney has been a huge inspiration for me. I have dreamed of creating my own experience since high school and in March of 2024 I seized the opportunity to grab available farmland along the Willamette River just north of Eugene, Oregon.
            </p>
            <p>
              Today, I continue to expand farm infrustructure and build out an enchanting experience through flowers at Hues Floral Park.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://instagram.com/huesflowers" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="mailto:hello@hues.flowers"
              icon={MailIcon}
              className="mt-8 border-t border-lime-100 pt-8 dark:border-lime-700/40"
            >
              hello@hues.flowers
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
