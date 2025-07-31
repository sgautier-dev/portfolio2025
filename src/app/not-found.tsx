import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export default function NotFound() {
  return (
    <Container className="flex h-full items-center pt-16 sm:pt-32">
      <div className="flex flex-col items-center">
        <p className="text-base font-semibold text-slate-400 dark:text-slate-500">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl">
          Page introuvable
        </h1>
        <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
          Désolé, nous n&apos;avons pas trouvé la page que vous recherchez.
        </p>
        <Button href="/" variant="secondary" className="mt-4">
          Retour à l&apos;accueil
        </Button>
      </div>
    </Container>
  )
}
