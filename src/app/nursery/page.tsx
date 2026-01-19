import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import photoAnimaginary from '@/images/logos/animaginary.svg'
import photoCosmos from '@/images/logos/cosmos.svg'
import photoHelioStream from '@/images/logos/helio-stream.svg'
import photoOpenShuttle from '@/images/logos/open-shuttle.svg'
import photoPlanetaria from '@/images/logos/planetaria.svg'

const plantStarts = [
  {
    name: 'Snapdragon',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: '/snapdragon', label: 'Shop Snapdragons' },
    photo: photoPlanetaria,
  },
  {
    name: 'Eucalyptus',
    description:
      'High performance web animation library, hand-written in optimized WASM.',
    link: { href: '#', label: 'Shop ' },
    photo: photoAnimaginary,
  },
  {
    name: 'Cinnimon Basil',
    description:
      'Real-time video streaming library, optimized for interstellar transmission.',
    link: { href: '#', label: 'Shop ' },
    photo: photoHelioStream,
  },
  {
    name: 'Yarrow',
    description:
      'The operating system that powers our Planetaria space shuttles.',
    link: { href: '#', label: 'Shop ' },
    photo: photoCosmos,
  },
  {
    name: 'Zinnia',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: '#', label: 'Shop ' },
    photo: photoOpenShuttle,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Hues Cut Flower Nursery',
  description: 'The best varieties of cut flowers ready to plant in your own garden at home.',
}

export default function PlantStarts() {
  return (
    <SimpleLayout
      title="The Flower Nursery. Cut Flower Starts for Your Own Garden."
      intro="Hues' cut flower nursery is the place to find the best varieties of cut flower starts ready to plant in your own garden at home."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          >
              <li>Coming soon...</li>
        {/* {plantStarts.map((plantStart) => (
          <Card as="li" key={plantStart.name}>
            <div className="relative z-10 flex h-36 w-36 items-center justify-center rounded bg-white shadow-md ring-1 shadow-lime-800/5 ring-lime-900/5 dark:border dark:border-lime-700/50 dark:bg-lime-800 dark:ring-0">
              <Image
                src={plantStart.photo}
                alt=""
                className="h-32 w-32"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-lime-800 dark:text-lime-100">
              <Card.Link href={plantStart.link.href}>{plantStart.name}</Card.Link>
            </h2>
            <Card.Description>{plantStart.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-lime-400 transition group-hover:text-yellow-500 dark:text-lime-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{plantStart.link.label}</span>
            </p>
          </Card>
        ))} */}
      </ul>
    </SimpleLayout>
  )
}
