import { request, gql } from 'graphql-request'

const grapqlAPI = process.env.NEXT_PUBLIC_GRAPH_CMS_ENDPOINT

export const getPosts = async () => {
    const query = gql`
      query Assets {
        postsConnection {
          edges {
            node {
              title
              description {
                html
              }
            }
          }
        }
      }
    `
    const results = await request(grapqlAPI as string, query)

    return results.postsConnection.edges
}
