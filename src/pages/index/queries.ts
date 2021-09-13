import gql from 'graphql-tag';

export const HomePageGQL = gql`query HomePage {
    categories(level: 0, first: 4) {
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
    collections (first:4 ,channel:"default-channel") {
        edges{
          node {
            id
            name
            products(first: 3){
              edges{
                node{
                  id
                  name
                  thumbnail(size: 200) {
                      url
                  }
                }
              }
            }
          }
        }
    }
  }`;