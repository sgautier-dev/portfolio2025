'use client'
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { useAction } from 'next-safe-action/hooks'
import sendEmail from '@/actions/sendEmail'
import { Loader2 } from 'lucide-react'
import { DisplayServerActionResponse } from './DisplayServerActionResponse'
import { Button } from './Button'

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const formRef = useRef<HTMLFormElement>(null)
  const { execute, result, isExecuting } = useAction(sendEmail)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    execute(formData)
  }

  useEffect(() => {
    if (!isExecuting && result.data?.message) {
      if (formRef.current) {
        formRef.current.reset() // Reset form if success
      }
      setFormData({
        name: '',
        email: '',
        message: '',
      })
    }
  }, [isExecuting, result])

  return (
    <form
      onSubmit={handleSubmit}
      ref={formRef}
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
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-input mb-4"
        />
        <input
          type="email"
          placeholder="E-mail"
          aria-label="Email address"
          autoComplete="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input mb-4"
        />
        <textarea
          placeholder="Votre message"
          aria-label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="form-input mb-4"
        ></textarea>
        <Button type="submit" className="self-end">
          {isExecuting ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            'Envoyer'
          )}
        </Button>
        <DisplayServerActionResponse result={result} />
      </div>
    </form>
  )
}
