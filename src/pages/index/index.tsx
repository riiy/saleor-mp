import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { gql } from 'apollo-boost';
import graphqlClient from "../../utils/graphql-client";

import './index.scss'

export default class Index extends Component {

  componentWillMount() { }

  async componentDidMount() {
    const query = gql`query HomePageProducts {
    shop {
      description
      name
    }
    categories(level: 0, first: 4) {
      edges {
        node {
          id
          name
          slug
          backgroundImage {
            url
          }
        }
      }
    }
  }`;
   graphqlClient.query({query, variables: {}}).then(result => {
     console.log('result===', result.data);
   });
  }


  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
