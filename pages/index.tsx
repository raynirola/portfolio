import type { NextPage } from 'next'

import { BaseLayout } from '@/layouts'
import { ContactForm, Intro, Projects, Section, Skills } from '@/components'

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <Intro className="mt-12 max-w-3xl lg:max-w-4xl xl:max-w-5xl px-4 mx-auto sm:px-6 lg:px-0" />

      <Section
        title="Introduction"
        className="mt-20 max-w-3xl lg:max-w-4xl xl:max-w-5xl px-4 mx-auto sm:px-6 lg:px-0">
        <p className="mb-4 text-base text-gray-800 dark:text-gray-300">
          I am Ray, from Sikkim, India.
        </p>
        <p className="mb-4 text-base text-gray-800 dark:text-gray-300">
          I enjoy creating high-quality software products with a complex logic behind it.
          <br />
          My everyday technology stack includes React, Vue, Python, Flutter and Laravel.
        </p>
        <p className="text-base text-gray-800 dark:text-gray-300">
          I am also currently learning more about Ethereum blockchain and cyber-security.
        </p>
      </Section>

      <Section
        className="mt-16 max-w-3xl lg:max-w-4xl xl:max-w-5xl px-4 mx-auto sm:px-6 lg:px-0"
        title="Projects"
        description={
          <span>
            Here are some of my most favourite projects that I enjoyed coding and designing from
            scratch, both with a team and alone. Checkout my &nbsp;
            <a
              target="_blank"
              rel="noreferrer nofollow noopener"
              className="text-green-600 underline hover:text-green-500"
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
        className="mt-16 max-w-3xl lg:max-w-4xl xl:max-w-5xl px-4 mx-auto sm:px-6 lg:px-0"
        title="Skills"
        description="I am passionate about using cutting-edge technologies. These are the tools I am most familiar with and build things every day.">
        <div className="mt-8">
          <Skills />
        </div>
      </Section>

      <div className="bg-white dark:bg-black/70 py-12 mt-16">
        <Section
          className="max-w-3xl lg:max-w-4xl xl:max-w-5xl px-4 mx-auto sm:px-6 lg:px-0"
          title="Wanna reach out?"
          description="Feel free to drop me a message if you have some interesting offer or you want to hang out.">
          <ContactForm className="mt-12" />
        </Section>
      </div>
    </BaseLayout>
  )
}

export default Home
