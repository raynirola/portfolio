import axios from "axios"
import { FC, HTMLAttributes, useEffect, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { CheckCircleIcon, InformationCircleIcon } from "@heroicons/react/solid"

export const ContactForm: FC<HTMLAttributes<HTMLFormElement>> = (props) => {
	const { register, handleSubmit, formState, reset } = useForm()
	const [serverError, setServerError] = useState(false)
	const [isFormSubmitting, setIsFormSubmitting] = useState(false)
	const [success, setSuccess] = useState(false)

	const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsFormSubmitting(true)
		sendContactMessage(data)
			.then((response) => setSuccess(response.status === 201))
			.catch((error) => setServerError(error.response.data.message))
			.finally(() => {
				setIsFormSubmitting(false)
				reset()
			})
	}

	const sendContactMessage = async (data :FieldValues) => await axios.post("/api/contact", data)

	const SuccessMessage = () => {
		useEffect(() => {
		const successTimeout = setTimeout(() => setSuccess(false), 5000)
			return () => clearTimeout(successTimeout)
		}, [])

		return (
			<div className='flex items-start'>
				<CheckCircleIcon
					className='flex-shrink-0 w-5 h-5 mr-2 text-green-600'
					aria-hidden='true'
				/>
				<p className='text-sm text-gray-700 dark:text-gray-300'>
					Message sent successfully, will get back to you soon.
				</p>
			</div>
		)
	}

	const ErrorMessage = () => {
		useEffect(() => {
		const errorTimeout = setTimeout(() => setServerError(false), 5000)
			return () => clearTimeout(errorTimeout)
		}, [])

		return (
			<div className='flex items-start'>
				<InformationCircleIcon
					className='flex-shrink-0 w-5 h-5 mr-2 text-red-500'
					aria-hidden='true'
				/>
				<p className='text-sm text-gray-700 dark:text-gray-300'>{serverError}</p>
			</div>
		)
	}

	const nameFieldValidation = {
		required: {
			value: true,
			message: "The name field is required.",
		},
		maxLength: {
			value: 32,
			message: "The name should not be more than 32 characters.",
		},
		pattern: {
			value: /^[a-zA-Z0-9/ ]*$/,
			message: "The name may only contain letters and numbers.",
		},
	}

	const emailFieldValidation = {
		required: {
			value: true,
			message: "The email field is required.",
		},
		maxLength: {
			value: 255,
			message: "The email must be less than 255 characters.",
		},
		pattern: {
			value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.+([a-z]){2,6}$/,
			message: "Invalid email format.",
		},
	}

	const messageFieldValidation = {
		required: {
			value: true,
			message: "The message field is required.",
		},
		minLength: {
			value: 20,
			message: "The message field must be least 20 characters.",
		},
	}

	return (
		<form onSubmit={handleSubmit(handleFormSubmit)} {...props}>
			<div className='grid grid-cols-6 gap-6'>
				<div className='col-span-6 sm:col-span-3'>
					<label
						htmlFor='name'
						className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
						Name
					</label>
					<input
						{...register("name", nameFieldValidation)}
						type='text'
						id='name'
						placeholder='John Doe'
						autoComplete='name'
						className={`py-3 px-4 mt-1 ${
							formState.errors.name
								? "focus:ring-red-500 focus:border-red-500"
								: "focus:ring-green-500 focus:border-green-500"
						} block w-full shadow-sm sm:text-sm border-gray-300 dark:bg-coolGray-800/50 dark:border-coolGray-800 dark:text-gray-300 rounded-md`}
					/>
					{formState.errors.name && (
						<span className='text-xs font-medium text-red-500'>
							{formState.errors.name.message}
						</span>
					)}
				</div>

				<div className='col-span-6 sm:col-span-3'>
					<label
						htmlFor='email_address'
						className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
						Email address
					</label>
					<input
						{...register("email", emailFieldValidation)}
						type='text'
						id='email_address'
						autoComplete='email'
						placeholder='you@example.com'
						className={`py-3 px-4 mt-1 ${
							formState.errors.email
								? "focus:ring-red-500 focus:border-red-500"
								: "focus:ring-green-500 focus:border-green-500"
						} block w-full shadow-sm sm:text-sm border-gray-300 dark:bg-coolGray-800/50 dark:border-coolGray-800 rounded-md dark:text-gray-300`}
					/>
					{formState.errors.email && (
						<span className='text-xs font-medium text-red-500'>
							{formState.errors.email.message}
						</span>
					)}
				</div>
			</div>

			<div className='mt-4'>
				<label
					htmlFor='message'
					className='block text-sm font-medium text-gray-700 dark:text-gray-300'>
					About
				</label>
				<div className='mt-1'>
					<textarea
						{...register("message", messageFieldValidation)}
						id='message'
						rows={5}
						className={`py-3 px-4 shadow-sm ${
							formState.errors.message
								? "focus:ring-red-500 focus:border-red-500"
								: "focus:ring-green-500 focus:border-green-500"
						} mt-1 block w-full resize-none sm:text-sm border border-gray-300 dark:bg-coolGray-800/50 dark:border-coolGray-800 dark:text-gray-300 rounded-md`}
						placeholder='Your message here.'
						defaultValue={""}
					/>
				</div>
				<p className='mt-2 text-sm text-gray-500 dark:text-gray-400'>
					Something interesting perhaps. URLs are hyperlinked.
				</p>
				{formState.errors.message && (
					<span className='text-xs font-medium text-red-500'>
						{formState.errors.message.message}
					</span>
				)}
			</div>
			<div className='flex flex-col-reverse justify-between py-3 md:flex-row md:items-center'>
				<div>
					{serverError && <ErrorMessage />}
					{success && <SuccessMessage />}
				</div>
				<button
					disabled={isFormSubmitting}
					type='submit'
					className='mb-4 md:mb-0 inline-flex justify-center py-2.5 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:focus:ring-offset-gray-900'>
					{isFormSubmitting ? "Sending.." : "Send  Message"}
				</button>
			</div>
		</form>
	)
}
