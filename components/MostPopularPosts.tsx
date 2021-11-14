import { BlogCard, Section } from '@/components'

const MostPopularPosts = () => {
  return (
    <Section
      title="Most Popular Posts"
      className="mt-16 max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto sm:px-6 lg:px-0"
      titleClasses="ml-4 sm:ml-0">
      <BlogCard
        title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
        summary="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
        slug="style-guides-component-libraries-design-systems"
        image="/images/posts/style-guides-component-libraries-design-systems/banner.jpg"
      />
      <BlogCard
        title="How Stripe Designs Beautiful Websites"
        summary="Examining the tips and tricks used to make Stripe's website design a notch above the rest."
        slug="how-stripe-designs-beautiful-websites"
        image="/images/posts/how-stripe-designs-beautiful-websites/banner.png"
      />
      <BlogCard
        title="Creating a Monorepo with Lerna & Yarn Workspaces"
        summary="In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process."
        slug="monorepo-lerna-yarn-workspaces"
        image="/images/posts/monorepo-lerna-yarn-workspaces/banner.png"
      />
    </Section>
  )
}

export { MostPopularPosts }
