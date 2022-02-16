import Main from 'components/templates/Main'
import { initializeApollo } from 'graphql/client'
import { AllUploadFilesQuery } from 'graphql/types'
import { ALL_UPLOAD_FILES } from 'graphql/upload/all-uploads'

const Index = () => {
  return <Main />
}

export default Index

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<AllUploadFilesQuery>({
    query: ALL_UPLOAD_FILES,
  })

  console.log(data.uploadFiles?.data)
  return {
    props: {
      allCategoriesQuery: data,
    }, // will be passed to the page component as props
  }
}
