import { Meta } from '../layout/Meta'
import { Main } from '../templates/Main'

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      Main Page
    </Main>
  )
}

export default Index
