import type { NextPage } from 'next'

import { BaseLayout } from '@/layouts'
import { ContactForm, Intro, Projects, Section, Skills } from '@/components'

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <Intro className="mx-auto mt-12 max-w-3xl px-4 sm:px-6 lg:max-w-4xl lg:px-0 xl:max-w-5xl" />

      <Section
        title="Introduction"
        className="mx-auto mt-20 max-w-3xl px-4 sm:px-6 lg:max-w-4xl lg:px-0 xl:max-w-5xl">
        <h1 className="mb-4 text-base text-gray-800 dark:text-slate-400">
          I am Ray, from Sikkim, India.
        </h1>
        <p className="mb-4 text-base text-gray-800 dark:text-slate-400">
          I enjoy creating high-quality software products with a complex logic behind it.
          <br />
          My everyday technology stack includes React, Vue, Python, Flutter and Laravel.
        </p>
        <p className="text-base text-gray-800 dark:text-slate-400">
          I am also currently learning more about Ethereum blockchain and cyber-security.
        </p>
      </Section>

      <Section
        className="mx-auto mt-16 max-w-3xl px-4 sm:px-6 lg:max-w-4xl lg:px-0 xl:max-w-5xl"
        title="Projects"
        description={
          <span>
            Here are some of my most favourite projects that I enjoyed coding and designing from
            scratch, both with a team and alone. Checkout my{' '}
            <a
              target="_blank"
              rel="noreferrer nofollow noopener"
              className="text-purple-700 underline hover:text-purple-500"
              href="https://github.com/raynirola">
              Github
            </a>
            &nbsp; for more projects and open source contribution.
          </span>
        }>
        <div className="mt-8">
          <Projects />
        </div>
      </Section>

      <Section
        className="mx-auto mt-16 max-w-3xl px-4 sm:px-6 lg:max-w-4xl lg:px-0 xl:max-w-5xl"
        title="Skills"
        description="I am passionate about using cutting-edge technologies. These are the tools I am most familiar with and build things every day.">
        <div className="mt-8">
          <Skills />
        </div>
      </Section>

      <div className="mt-16 bg-white py-12 dark:bg-black/70">
        <Section
          className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-4xl lg:px-0 xl:max-w-5xl"
          title="Wanna reach out?"
          description="Feel free to drop me a message if you have some interesting offer or you want to hang out.">
          <ContactForm className="mt-12" />
        </Section>
      </div>
    </BaseLayout>
  )
}

export default Home
