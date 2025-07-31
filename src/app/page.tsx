import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import Contact from '@/components/Contact'
import { GitHubIcon, LinkedInIcon, MaltIcon } from '@/components/SocialIcons'
import logoKailash from '@/images/logos/kailash.jpg'
import logoTemple from '@/images/logos/temple.png'
import logoMorgabine from '@/images/logos/morgabine.jpeg'
import logoRiso from '@/images/logos/riso.jpeg'
import logoDev from '@/images/logos/nextjs.png'
import image1 from '@/images/photos/seb-massage.jpeg'
import image2 from '@/images/photos/seb-medite.jpg'
import image3 from '@/images/photos/seb-laptop.jpg'
import image4 from '@/images/photos/seb-trail.jpg'
import image5 from '@/images/photos/seb-cuisine.jpg'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
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
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-slate-100 stroke-slate-400 dark:fill-slate-100/10 dark:stroke-slate-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-slate-400 dark:stroke-slate-500"
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
      <Card.Cta>Lire l&apos;article</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-slate-500 transition group-hover:fill-slate-600 dark:fill-slate-400 dark:group-hover:fill-slate-300" />
    </Link>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-slate-800/5 ring-1 ring-slate-900/5 dark:border dark:border-slate-700/50 dark:bg-slate-800 dark:ring-0">
        <Image
          src={role.logo}
          alt="Sébastien Gautier, expériences"
          className="h-7 w-7 rounded-full"
          unoptimized
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-slate-900 dark:text-slate-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-slate-500 dark:text-slate-300">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-slate-400 dark:text-slate-500"
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

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Freelance',
      title: 'Dev Web Fullstack',
      logo: logoDev,
      start: '2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Groupe Morgabine Hospitality',
      title: 'Dev Wordpress',
      logo: logoMorgabine,
      start: '2021',
      end: '2022',
    },
    {
      company: 'Maison Kailash',
      title: 'Gérant/praticien',
      logo: logoKailash,
      start: '2014',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Temples et Monastères',
      title: 'Cuisine',
      logo: logoTemple,
      start: '2008',
      end: '2011',
    },
    {
      company: 'Riso France',
      title: 'Responsable BI',
      logo: logoRiso,
      start: '2003',
      end: '2006',
    },
  ]

  return (
    <div className="rounded-2xl border border-slate-100 p-6 dark:border-slate-700/40">
      <h2 className="flex text-sm font-semibold text-slate-900 dark:text-slate-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Expériences</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button
        href="/CV-SGAUTIER-092023.pdf"
        variant="secondary"
        target="_blank"
        prefetch={false}
        className="group mt-6 w-full"
      >
        Voir mon CV
        <ArrowDownIcon className="h-4 w-4 stroke-slate-400 transition group-active:stroke-slate-600 dark:group-hover:stroke-slate-50 dark:group-active:stroke-slate-50" />
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
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              placeholder="blur"
              alt="Sébastien Gautier, développeur web basé à la Réunion"
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
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
          <h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl">
            Développeur web fullstack, entrepreneur et méditant expérimenté.
          </h1>
          <p className="mt-6 text-base text-slate-600 dark:text-slate-300">
            Bonjour, je suis Sébastien, développeur web à la Réunion. Expert en
            développement de sites et applications web modernes et performantes,
            je suis aussi un trailer passionné et un méditant expérimenté.
            Fondateur de Maison Kailash, mon expertise va au-delà de
            l&apos;informatique pour englober le bien-être et la méditation, des
            domaines que j&apos;explore depuis 25 ans. Chaque projet pour moi est une
            nouvelle aventure, abordée avec rigueur, curiosité et un désir
            constant de dépassement. Si vous cherchez une expertise authentique
            et polyvalente, vous avez trouvé votre prestataire idéal.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/sgautier-dev"
              aria-label="Follow on GitHub"
              target="_blank"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/sebastien-gautier-55b38382"
              aria-label="Follow on LinkedIn"
              target="_blank"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://www.malt.fr/profile/sgautier"
              aria-label="Follow on Malt"
              target="_blank"
              icon={MaltIcon}
            />
          </div>
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
            <Contact />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
