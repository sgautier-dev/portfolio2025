'use client'
import { useState, useEffect, FormEvent } from 'react'
import Script from 'next/script'
import { Button } from '@/components/Button'
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'

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
        className="fill-slate-100 stroke-slate-400 dark:fill-slate-100/10 dark:stroke-slate-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-slate-400 dark:stroke-slate-500"
      />
    </svg>
  )
}
export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<string>('Envoyer')
  const [submitError, setSubmitError] = useState<string>('')

  //hidding Google reCaptcha badge from page
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
		  .grecaptcha-badge {
			visibility: hidden !important;
		  }
		`
    document.head.appendChild(style)
  }, [])

  const getRecaptchaToken = async () => {
    try {
      const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        { action: 'contact_form' },
      )
      return token
    } catch (error) {
      console.error(error)
      return null
    }
  }
  const validateEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    return emailRegex.test(email)
  }

  const resetForm = () => {
    setName('')
    setEmail('')
    setMessage('')
    setSubmitError('')
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    setSubmitError('')
    setIsSubmitting(true)
    setSubmitMessage('Envoi en cours...')

    const token = await getRecaptchaToken()

    if (!token) {
      setSubmitError(
        'Erreur lors de la vérification de sécurité. Veuillez réessayer.',
      )
      setSubmitMessage('Envoyer')
      setIsSubmitting(false)
      return
    }

    if (!validateEmail(email)) {
      setSubmitError('Veuillez entrer une adresse e-mail valide.')
      return
    }

    try {
      // sending email
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, message, token }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitMessage(data.message)
        resetForm()
      } else {
        throw new Error(
          data.message || 'Une erreur est survenue. Veuillez réessayer.',
        )
      }
    } catch (error: any) {
      console.error(error)
      setSubmitError(error.message)
    } finally {
      setTimeout(() => {
        setSubmitMessage('Envoyer')
      }, 3000) // delay before resetting the submission message
      setIsSubmitting(false)
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-100 p-6 dark:border-slate-700/40"
    >
      <h2 className="flex text-sm font-semibold text-slate-900 dark:text-slate-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Parlons de votre projet</span>
      </h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
        Envie d&apos;un site web performant ou curieux de la méditation ?
        Laissez-moi un message. Réponse rapide garantie !
      </p>
      <div className="mt-6 flex flex-col">
        <input
          type="text"
          placeholder="Nom complet"
          aria-label="Nom complet"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="form-input mb-4"
        />
        <input
          type="email"
          placeholder="E-mail"
          aria-label="Email address"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form-input mb-4"
        />
        <textarea
          placeholder="Votre message"
          aria-label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          className="form-input mb-4"
        ></textarea>
        <Button type="submit" disabled={isSubmitting} className="self-end">
          {submitMessage}
        </Button>
        {submitError && (
          <div className="mt-2 flex items-center text-sm text-orange-600 sm:text-base">
            <ExclamationTriangleIcon className="h-5 w-5" aria-hidden="true" />
            <p className="ml-2">{submitError}</p>
          </div>
        )}
      </div>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
      />
    </form>
  )
}
