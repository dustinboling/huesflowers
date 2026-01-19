import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { CalendarIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import image1 from '@/images/photos/hailey-lilly-blurred.jpeg'
import image2 from '@/images/photos/orange-ball-dahlia.jpeg'
import image3 from '@/images/photos/boling-kids-dahlias.jpeg'
import image4 from '@/images/photos/dahlia-pooh.jpeg'
import image5 from '@/images/photos/macy-melody-gypsy.jpeg'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-lime-100 stroke-lime-400 dark:fill-lime-100/10 dark:stroke-lime-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-lime-400 dark:stroke-lime-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}


function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-lime-100 p-6 dark:border-lime-700/40"
    >
      <h2 className="flex text-sm font-semibold text-lime-900 dark:text-lime-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Become a flower friend</span>
      </h2>
      <p className="mt-2 text-sm text-lime-600 dark:text-lime-400">
        Get notified of special events, dahlia tuber sales, and other enchanting news.
      </p>
      <div className="mt-6 flex items-center">
        <span className="flex min-w-0 flex-auto p-px">
          <input
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            required
            className="w-full appearance-none rounded-[calc(var(--radius-md)-1px)] bg-white px-3 py-[calc(--spacing(2)-1px)] shadow-md shadow-lime-800/5 outline outline-lime-900/10 placeholder:text-lime-400 focus:ring-4 focus:ring-yellow-500/10 focus:outline-yellow-500 sm:text-sm dark:bg-lime-700/15 dark:text-lime-200 dark:outline-lime-700 dark:placeholder:text-lime-500 dark:focus:ring-yellow-400/10 dark:focus:outline-yellow-400"
          />
        </span>
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

interface SpecialEvent { 
    title: string
    description : string
    start: string | { label: string; dateTime: string }
    end: string | { label: string; dateTime: string }
}

function SpecialEvent({ specialEvent }: { specialEvent: SpecialEvent }) {
    let startLabel =
        typeof specialEvent.start === 'string' ? specialEvent.start : specialEvent.start.label
    let startDate =
        typeof specialEvent.start === 'string' ? specialEvent.start : specialEvent.start.dateTime
    
    let endLabel = typeof specialEvent.end === 'string' ? specialEvent.end : specialEvent.end.label
    let endDate = typeof specialEvent.end === 'string' ? specialEvent.end : specialEvent.end.dateTime

    return (
      <li className="flex gap-4">
        <dl className="flex flex-auto flex-wrap gap-x-2">
          <dt className="sr-only">Title</dt>
          <dd className="w-full flex-none text-sm font-medium text-lime-900 dark:text-lime-100">
            {specialEvent.title}
          </dd>
          <dt className="sr-only">Description</dt>
          <dd className="text-xs text-lime-500 dark:text-lime-400">
            {specialEvent.description}
          </dd>
          <dt className="sr-only">Date</dt>
          <dd
            className="ml-auto text-xs text-lime-400 dark:text-lime-500"
            aria-label={`${startLabel} until ${endLabel}`}
          >
            <time dateTime={startDate}>{startLabel}</time>{' '}
            <span aria-hidden="true">—</span>{' '}
            <time dateTime={endDate}>{endLabel}</time>
          </dd>
        </dl>
      </li>
    )
}

function SpecialEvents() {
  let specialEvents: Array<SpecialEvent> = [
    {
      title: 'Daffodil Festival',
      description: 'Pick-your-own daffodils',
      start: 'April',
      end: 'May',
    },
    {
      title: 'Dahlia tuber sale',
      description: 'Tubers and Pre-potted Tubers',
      start: 'April',
      end: 'June',
    },
    {
      title: 'Floral Park Open',
      description: 'Self-guided tours, U-Pick flowers',
      start: 'July',
      end: 'October',
    },
    {
      title: 'Dahlia Festival',
      description: 'Pick-your-own dahlias',
      start: 'September',
      end: 'October',
    },
  ]

  return (
    <div className="rounded-2xl border border-lime-100 p-6 dark:border-lime-700/40">
      <h2 className="flex text-sm font-semibold text-lime-900 dark:text-lime-100">
        <CalendarIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Important Dates</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {specialEvents.map((specialEvent, specialEventIndex) => (
          <SpecialEvent key={specialEventIndex} specialEvent={specialEvent} />
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download Printable Card
        <ArrowDownIcon className="h-4 w-4 stroke-lime-400 transition group-active:stroke-lime-600 dark:group-hover:stroke-lime-50 dark:group-active:stroke-lime-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative w-44 flex-none overflow-hidden rounded-xl bg-lime-100 sm:w-72 sm:rounded-2xl dark:bg-lime-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <div className="aspect-9/10">
              <Image
                src={image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-lime-800 sm:text-5xl dark:text-lime-100">
            A New Floral Experience has Sprouted Near Eugene, Oregon
          </h1>
          <p className="mt-6 text-base text-lime-600 dark:text-lime-400">
            In 2024, Dusty began the first phase of development on Hues Floral
            Park— planting thousands of stunning dahlias on a two acre block
            along the banks of the majestic Willamette River
          </p>
          <div className="mt-6 flex gap-6"></div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <SpecialEvents />
          </div>
        </div>
      </Container>
    </>
  )
}
