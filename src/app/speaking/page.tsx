import { type Metadata } from 'next'
import Image from 'next/image'
import { SimpleLayout } from '@/components/SimpleLayout'

import pierre from '@/images/profils/pierre.jpeg'
import amine from '@/images/profils/amine.jpeg'
import boris from '@/images/profils/boris.jpg'
import rodolphe from '@/images/profils/rodolphe.jpeg'

const testimonials = [
  {
    body: "J'ai eu à travailler avec Sébastien dans mes précédents postes et je ne peux que le recommander: sérieux, force de proposition, compétent et bienveillant! Merci pour ce beau travail.",
    author: {
      name: 'Pierre Dillac',
      handle: 'DAF groupe SIROB',
      imageUrl: pierre,
    },
  },
  {
    body: "Merci Sébastien pour la qualité de l'application livrée pour notre société, en respectant les délais, le cahier des charges, la charte graphique, et toutes les fonctionnalités spécifiées ! Au delà du professionnalisme apprécié lors de nos échanges, ces derniers ont été fort conviviaux et constructifs. Bonne continuation.",
    author: {
      name: 'Amine Ayadi',
      handle: 'manager Ayteams',
      imageUrl: amine,
    },
  },
  {
    body: "J'apprécie chez Sébastien la juste analyse des besoins, les propositions pertinentes et créatives et la qualité des livrables. Le tout dans le cadre d'échanges créateurs de valeur pour l'un et l'autre. Merci Sébastien.",
    author: {
      name: 'Boris Benet',
      handle: 'Coach Holistis',
      imageUrl: boris,
    },
  },
  {
    body: 'Sébastien is an outstanding and compassionate professional, with strong core values and a powerful work ethic. He is very passionate and highly skilled, thanks to his team mind set.',
    author: {
      name: 'Rodolphe Sinimale',
      handle: 'Metta Bhavana',
      imageUrl: rodolphe,
    },
  },

  // More testimonials...
]

export const metadata: Metadata = {
  title: 'Références',
  description:
    'Témoignages clients.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="Témoignages de réussite."
      intro="Au-delà des technologies de pointe et des solutions sur mesure que je propose, ce qui distingue véritablement mes collaborations, ce sont mes compétences humaines. L'écoute active, l'engagement et la flexibilité sont autant de qualités que j'apporte à chaque projet. Découvrez ici les témoignages de clients qui ont été particulièrement séduits par cette approche intégrale, où la technique et l'humain vont de pair."
    >
      <div className="space-y-20">
        <div className="mx-auto mt-16 flow-root max-w-3xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0]">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.handle}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-slate-100 dark:bg-slate-300 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image
                      className="h-10 w-10 rounded-full bg-slate-100"
                      src={testimonial.author.imageUrl}
                      placeholder="blur"
                      width={256}
                      height={250}
                      alt="Sébastien Gautier, références clients"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author.name}
                      </div>
                      <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SimpleLayout>
  )
}
