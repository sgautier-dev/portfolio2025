'use server'
import React from 'react'
import { EmailTemplate } from '@/components/EmailTemplate'
import { Resend } from 'resend'
import { z } from 'zod'
import { actionClient } from '@/lib/safe-action'
import { flattenValidationErrors } from 'next-safe-action'
import { checkArcJetProtection } from '@/lib/arcjet-protection'

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
  name: z.string().min(1, { message: 'Le nom est requis..' }),
  email: z.string().email({ message: 'Adresse e-mail invalide.' }),
  message: z.string().min(1, { message: 'Le message est requis.' }),
})

const sendEmail = actionClient
  .schema(schema, {
    handleValidationErrorsShape: async (ve) =>
      flattenValidationErrors(ve).fieldErrors,
  })
  .action(async ({ parsedInput: { name, email, message } }) => {
    //throw new Error ('test')

    await checkArcJetProtection()

    await resend.emails.send({
      from: 'Seb Portfolio <contact@sgautier.dev>', // onboarding@resend.dev for resend temp address
      to: ['contact@sgautier.dev'],
      replyTo: email as string,
      subject: `Message de ${name}`,
      react: React.createElement(EmailTemplate, {
        name: name as string,
        senderEmail: email as string,
        message: message as string,
      }),
    })

    return {
      message: 'Votre message a bien été envoyé.',
    }
  })

export default sendEmail
