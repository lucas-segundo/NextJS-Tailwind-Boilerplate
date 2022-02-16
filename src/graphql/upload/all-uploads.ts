import { gql } from '@apollo/client'

export const ALL_UPLOAD_FILES = gql`
  query AllUploadFiles {
    uploadFiles(pagination: { start: 0 }) {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`
