import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'Vous êtes inscrit',
  description: 'Merci de vous inscrire à ma newsletter.',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Merci de vous inscrire."
      intro="Je vous enverrai un e-mail chaque fois que je publierai un nouvel article de blog, que je lancerai un nouveau projet ou que j'aurai quelque chose d'intéressant à partager. Vous pouvez vous désabonner à tout moment, sans rancune."
    />
  )
}
