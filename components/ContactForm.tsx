import { FC, HTMLAttributes, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useNotification } from '@/contexts/NotificationContext'

export const ContactForm: FC<HTMLAttributes<HTMLFormElement>> = props => {
  const { notify } = useNotification()
  const { register, handleSubmit, formState, reset } = useForm()
  const [sending, setSending] = useState(false)

  const sendContactMessage: SubmitHandler<FieldValues> = async data => {
    setSending(true)
    try {
      await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
      notify({ title: 'Message sent', message: 'Thank you for your message!', type: 'success' })
    } catch (_error) {
      const error = _error as Error
      notify({ title: 'Error sending message', message: error.message, type: 'error' })
    } finally {
      reset()
      setSending(false)
    }
  }

  const nameFieldValidation = {
    required: {
      value: true,
      message: 'The name field is required.',
    },
    maxLength: {
      value: 32,
      message: 'The name should not be more than 32 characters.',
    },
    pattern: {
      value: /^[a-zA-Z0-9/ ]*$/,
      message: 'The name may only contain letters and numbers.',
    },
  }

  const emailFieldValidation = {
    required: {
      value: true,
      message: 'The email field is required.',
    },
    maxLength: {
      value: 255,
      message: 'The email must be less than 255 characters.',
    },
    pattern: {
      value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.+([a-z]){2,6}$/,
      message: 'Invalid email format.',
    },
  }

  const messageFieldValidation = {
    required: {
      value: true,
      message: 'The message field is required.',
    },
    minLength: {
      value: 20,
      message: 'The message field must be least 20 characters.',
    },
  }

  return (
    <form onSubmit={handleSubmit(sendContactMessage)} {...props}>
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            {...register('name', nameFieldValidation)}
            type="text"
            id="name"
            placeholder="John Doe"
            autoComplete="name"
            className={`mt-1 py-3 px-4 ${
              formState.errors.name
                ? 'focus:border-red-500 focus:ring-red-500'
                : 'focus:border-purple-700 focus:ring-purple-700'
            } dark:border-coolGray-800 dark:bg-coolGray-800/50 block w-full rounded-md border-gray-300 shadow-sm dark:text-gray-300 sm:text-sm`}
          />
          {formState.errors.name && (
            <span className="text-xs font-medium text-red-500">{formState.errors.name.message}</span>
          )}
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label htmlFor="email_address" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email address
          </label>
          <input
            {...register('email', emailFieldValidation)}
            type="text"
            id="email_address"
            autoComplete="email"
            placeholder="you@example.com"
            className={`mt-1 py-3 px-4 ${
              formState.errors.email
                ? 'focus:border-red-500 focus:ring-red-500'
                : 'focus:border-purple-700 focus:ring-purple-700'
            } dark:border-coolGray-800 dark:bg-coolGray-800/50 block w-full rounded-md border-gray-300 shadow-sm dark:text-gray-300 sm:text-sm`}
          />
          {formState.errors.email && (
            <span className="text-xs font-medium text-red-500">{formState.errors.email.message}</span>
          )}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          About
        </label>
        <div className="mt-1">
          <textarea
            {...register('message', messageFieldValidation)}
            id="message"
            rows={5}
            className={`py-3 px-4 shadow-sm ${
              formState.errors.message
                ? 'focus:border-red-500 focus:ring-red-500'
                : 'focus:border-purple-700 focus:ring-purple-700'
            } dark:border-coolGray-800 dark:bg-coolGray-800/50 mt-1 block w-full resize-none rounded-md border border-gray-300 dark:text-gray-300 sm:text-sm`}
            placeholder="Your message here."
            defaultValue={''}
          />
        </div>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Something interesting perhaps. URLs are hyperlinked.
        </p>
        {formState.errors.message && (
          <span className="text-xs font-medium text-red-500">{formState.errors.message.message}</span>
        )}
      </div>
      <div className="flex flex-col-reverse justify-between py-3 md:flex-row md:items-center">
        <button
          disabled={sending || formState.isSubmitting}
          type="submit"
          className="mb-4 inline-flex justify-center rounded-md border border-transparent bg-purple-700 py-2.5 px-6 text-sm font-medium text-white shadow-sm hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-offset-2 dark:focus:ring-offset-gray-900 md:mb-0">
          {formState.isSubmitting ? 'Sending..' : 'Send  Message'}
        </button>
      </div>
    </form>
  )
}
