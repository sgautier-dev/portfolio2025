import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoLfit from '@/images/logos/lfit.png'
import logoDataCol from '@/images/logos/datacollector.png'
import logoJulie from '@/images/logos/julie.png'
import logoHolistis from '@/images/logos/holistis.png'
import logoDAF from '@/images/logos/daf974.png'
import logoADF from '@/images/logos/ADF.png'
import logoPapangues from "@/images/logos/papangues.png"

const projects = [
  {
    name: 'Aqua Dance Flow',
    description:
      "Site officiel de l'Aqua Dance Flow par Julie Gautier, combinant performance et design immersif. Développé en Next.js 15, TailwindCSS et TypeScript. Intègre l'API Eventbrite pour la gestion des événements et des webhooks pour la revalidation ISR.",
    link: {
      href: 'https://www.aquadanceflow.com',
      label: 'aquadanceflow.com',
    },
    logo: logoADF,
  },
  {
    name: 'Les Papangues',
    description:
      'Site vitrine pour un collège Montessori à La Réunion, développé en Next.js 15, TailwindCSS et TypeScript. Le design intègre une gestion dynamique des contenus, avec des performances optimisées et une approche responsive.',
    link: {
      href: 'https://www.lespapangues.com',
      label: 'lespapangues.com',
    },
    logo: logoPapangues,
  },
  {
    name: 'DAF974',
    description:
      "Création d'une plateforme web moderne pour un service de direction externalisée, avec Calendly pour la réservation et Stripe pour les paiements. Conçu en Next.js et TailwindCSS pour une performance optimale.",
    link: {
      href: 'https://www.daf974.re',
      label: 'daf974.re',
    },
    logo: logoDAF,
  },
  {
    name: 'Holistis',
    description:
      'Holistis est une plateforme de coaching en Next.js, Tailwind et TypeScript. Le backend utilise Sanity.io. Automatisation des newsletters MailChimp via Webhook lors de la publication de nouveaux articles.',
    link: { href: 'https://www.holistis.net/', label: 'holistis.net' },
    logo: logoHolistis,
  },
  {
    name: 'L.FIT',
    description:
      'Site de coaching sportif en Next.js, Tailwind et TypeScript. Gestion de contenu via Sanity.io. Inclu une section membres sécurisée avec Clerk et paiement via Stripe pour accès premium.',
    link: { href: 'https://www.lfit.pro/', label: 'lfit.pro' },
    logo: logoLfit,
  },
  {
    name: 'Julie Gautier',
    description:
      'Portfolio artistique de Julie Gautier, spécialisée en art et vidéo aquatique. Développé en Next.js 13, TailwindCSS et TypeScript, avec un backend sur Sanity.io. Score de performance supérieur à 97% sur Lighthouse.',
    link: { href: 'https://www.juliegautier.me/', label: 'juliegautier.me' },
    logo: logoJulie,
  },
  {
    name: 'Data Collector',
    description:
      'Formulaire client pour Data Chaman, codé en Next.js 13, Tailwind et TypeScript. Le backend utilise MongoDB et Prisma pour des opérations sécurisées. Conçu pour collecter et stocker de manière sécurisée des informations clients.',
    link: {
      href: 'https://github.com/sgautier-dev/data-collector',
      label: 'github.com',
    },
    logo: logoDataCol,
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
  title: 'Projets',
  description: 'Mes derniers projets web.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Mes derniers projets."
      intro="En tant que développeur web fullstack (compétent sur tous les aspects d'un projet web), chaque projet est une manifestation de mon engagement pour l'excellence technique, la performance et la sécurité. Alliant compétence en codage et sensibilité humaine, je m'efforce de créer des solutions qui résistent aux défis du monde numérique en constante évolution."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 shadow-md shadow-slate-800/5 ring-1 ring-slate-900/5 dark:border dark:border-slate-700/50 dark:bg-slate-800 dark:ring-0">
              <Image
                src={project.logo}
                alt="Sébastien Gautier, mes projets"
                placeholder="blur"
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-slate-800 dark:text-slate-100">
              <Card.Link href={project.link.href} target="_blank">
                {project.name}
              </Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-slate-400 transition group-hover:text-orange-500 dark:text-slate-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
