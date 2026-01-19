import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import picAmericanDawn from '@/images/dahlias/american-dawn/dahlia-american-dawn_2429.jpeg'
// import logoCosmos from '@/images/logos/cosmos.svg'
// import logoHelioStream from '@/images/logos/helio-stream.svg'
// import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
// import logoPlanetaria from '@/images/logos/planetaria.svg'

const dahlias = [
  {
    name: 'American Dawn',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: '/dahlias/american-dawn', label: 'Dahlia \'American Dawn\'' },
    photo: picAmericanDawn,
  },
  {
    name: 'American Sun',
    description:
      'High performance web animation library, hand-written in optimized WASM.',
    link: { href: '#', label: 'github.com' },
    photo: picAmericanDawn,
  },
  {
    name: 'Appleblossom',
    description:
      'Real-time video streaming library, optimized for interstellar transmission.',
    link: { href: '#', label: 'github.com' },
    photo: picAmericanDawn,
  },
  {
    name: 'Babette',
    description:
      'The operating system that powers our Planetaria space shuttles.',
    link: { href: '#', label: 'github.com' },
    photo: picAmericanDawn,
  },
  {
    name: 'Bacardi',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: '#', label: 'github.com' },
    photo: picAmericanDawn,
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
  title: 'Dusty\'s Dahlias',
  description: 'Dusty\'s Dahlias at Hues Flower Farm and Nursery',
}

export default function Dahlias() {
  return (
    <SimpleLayout
      title="Dusty's Dahlias."
      intro="Over 120 varieties in all forms available as tubers, with many varieties pre-potted and greenhouse started for earlier blooms."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          >
              <li>Stay tuned... website under construction.</li>
        {/* {dahlias.map((dahlia) => (
          <Card as="li" key={dahlia.name}>
            <div className="relative z-10 flex p-2 items-center justify-center rounded-xl bg-white shadow-md ring-1 shadow-lime-800/5 ring-lime-900/5 dark:border dark:border-lime-700/50 dark:bg-lime-800 dark:ring-0">
              <Image
                src={dahlia.photo}
                alt=""
                className="rounded-lg h-auto w-auto"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-lime-800 dark:text-lime-100">
              <Card.Link href={dahlia.link.href}>{dahlia.name}</Card.Link>
            </h2>
            <Card.Description>{dahlia.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-lime-400 transition group-hover:text-yellow-500 dark:text-lime-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{dahlia.link.label}</span>
            </p>
          </Card>
        ))} */}
      </ul>
    </SimpleLayout>
  )
}
