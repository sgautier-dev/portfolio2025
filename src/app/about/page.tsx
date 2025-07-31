import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import Contact from '@/components/Contact'
import { GitHubIcon, LinkedInIcon, MaltIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

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
        target="_blank"
        className="group flex text-sm font-medium text-slate-800 transition hover:text-orange-500 dark:text-slate-200 dark:hover:text-orange-500"
      >
        <Icon className="h-6 w-6 flex-none fill-slate-500 transition group-hover:fill-orange-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export const metadata: Metadata = {
  title: 'Bio',
  description:
    "Je suis un développeur web basé à la Réunion, engagé dans l'évolution du web.",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Sébastien Gautier, développeur web basé à la Réunion"
              placeholder="blur"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-slate-100 object-cover dark:bg-slate-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl">
            Je suis un développeur web basé à la Réunion, engagé dans
            l&apos;évolution du web.
          </h1>
          <div className="mt-6 space-y-7 text-base text-slate-600 dark:text-slate-300">
            <p>
              Mes études à l&apos;INSA Lyon ont posé les fondations techniques
              qui me permettent aujourd&apos;hui d&apos;exceller dans le
              développement web. Cependant, c&apos;est en explorant
              d&apos;autres univers, tant extérieurs qu&apos;intérieurs, que
              j&apos;ai vraiment trouvé ma voie. Mon voyage initiatique en Asie
              et en Océanie m&apos;a conduit à me plonger dans la méditation,
              l&apos;exploration de soi et, finalement, à redécouvrir avec
              passion le monde fascinant de la technologie.
            </p>
            <p>
              Parmi les moments les plus marquants de mes voyages figure la
              période passée en tant que responsable de cuisine dans un
              monastère Zen. Loin d&apos;être une retraite paisible,
              c&apos;était un terrain intense d&apos;apprentissage et de remise
              en question, orchestré par un maître Zen dont l&apos;art est de
              nous confronter à nous-mêmes. Cette expérience m&apos;a propulsé
              au-delà de mes limites, jusqu&apos;à un point de rupture
              nécessaire pour une renaissance spirituelle et personnelle.
            </p>
            <p>
              Cette expérience transformative m&apos;a doté de qualités
              cruciales que j&apos;applique dans mon travail aujourd&apos;hui :
              une résilience inébranlable, une grande capacité à résoudre des
              problèmes sous pression, et une aptitude à maintenir une vision
              claire même dans des contextes complexes. Ce sont ces mêmes
              qualités qui me permettent de développer des applications web
              robustes et performantes, qui résistent aux défis du monde
              numérique en constante évolution.
            </p>
            <p>
              De retour à la Réunion, j&apos;ai fondé Maison Kailash, un centre
              de bien-être, avant de plonger de nouveau dans le monde de la
              tech. Spécialisé en Next.js, TypeScript, et TailwindCSS, je
              crée des applications aussi stables et agiles que je le suis
              moi-même sur les sentiers de trail.
            </p>
            <p>
              L&apos;aspect humain est au cœur de ma démarche professionnelle.
              Pour moi, une relation de travail réussie repose avant tout sur la
              confiance mutuelle, l&apos;écoute et le respect des engagements.
            </p>
            <p>
              Vous cherchez un développeur web qui comprend vos besoins, qui
              s&apos;engage pleinement dans vos projets et qui apporte une
              touche unique ? Vous êtes au bon endroit.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/sgautier-dev"
              icon={GitHubIcon}
              className="mt-4"
            >
              Suivez-moi sur GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/sebastien-gautier-55b38382"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Suivez-moi sur LinkedIn
            </SocialLink>
            <SocialLink
              href="https://www.malt.fr/profile/sgautier"
              icon={MaltIcon}
              className="mb-6 mt-4"
            >
              Suivez-moi sur Malt
            </SocialLink>
          </ul>
          <Contact />
        </div>
      </div>
    </Container>
  )
}
