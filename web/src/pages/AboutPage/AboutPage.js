import { useRouterState } from '@redwoodjs/router/dist/router-context'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      <main>
        <p>This site was created to bla bla merda</p>
      </main>
    </>
  )
}

export default AboutPage
