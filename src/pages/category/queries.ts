import gql from 'graphql-tag';


export const CategoryGQL = gql`query Category {
  categories(level: 0, first: 4) {
    edges {
      node {
        id
        name
        children(first: 6) {
          edges {
            node {
              id
              name
              backgroundImage {
                url
              }
            }
          }
        }
      }
    }
  }
}`;