import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { InstagramIcon, XIcon } from '@/components/SocialIcons'
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
            I’m Dusty. The Farmer and Creator of Hues.
          </h1>
          <div className="mt-6 space-y-7 text-base text-lime-600 dark:text-lime-400">
            <p>
              Hues didn't start as a business plan. It started as a feeling.
            </p>

            <p>
              For as long as I can remember, I've been drawn to places that let
              people forget the noise of everyday life for a while—places where
              time slows down, where beauty feels intentional, and where you
              leave a little lighter than you arrived. As a kid, that feeling
              came from wandering parks and gardens, sitting on benches long
              after closing, imagining what it would be like to create a place
              that made people feel <em>that</em> way.
            </p>

            <p>
              One of the strongest influences on that imagination was
              Disneyland. Not because it's flashy or grand, but because of how
              thoughtfully it's built. Walt Disney believed that details
              matter—that music, layout, hospitality, and emotion all work
              together to shape how people feel. Disneyland isn't just something
              you look at; it's something you're <em>inside</em> of. That idea
              stayed with me: that a place can be designed to care for people
              quietly, without them even realizing why they feel so good being
              there.
            </p>

            <p>Years later, that inspiration met soil.</p>

            <p>
              What began as a few rows of dahlias slowly turned into something
              more. Not just a flower farm, but a place designed with
              intention—paths you want to wander, music that follows you without
              demanding attention, flowers chosen as much for how they make you
              feel as how they look. Hues became my way of blending farming with
              storytelling, hard work with imagination, and beauty with meaning.
            </p>

            <p>
              I build this place largely by hand—often one project at a time,
              between family life, weather setbacks, broken plans, and long
              nights of thinking. There have been losses along the way: storms
              that destroyed months of work, seasons where plants didn't
              survive, moments when progress felt painfully slow. But those
              challenges are part of the story too. They keep the place honest.
            </p>

            <p>
              At its heart, Hues is about connection. About welcoming people as
              they are. About creating an experience that doesn't rush you, sell
              to you, or ask you to perform—just invites you to be present. Pick
              some flowers. Listen to the music. Watch your kids chase chickens.
              Sit for a while longer than you planned.
            </p>

            <p>
              If you visit and feel a little sadness when it's time to
              leave—paired with a quiet urge to come back—then I've built what I
              hoped to build.
            </p>

            <p>
              Thanks for being part of it,
              <br />
              <strong>Dusty</strong>
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://instagram.com/huesflowers"
              icon={InstagramIcon}
              className="mt-4"
            >
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
