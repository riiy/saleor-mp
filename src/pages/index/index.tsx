import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image, Text, } from '@tarojs/components'
import { AtGrid, AtSearchBar } from "taro-ui"
import graphqlClient from "../../utils/graphql-client";

import './index.scss'
import { HomePageGQL } from './queries';
import { HomePage } from './__generated__/HomePage';


export default class Index extends Component<{}, HomePage>{
  constructor() {
    super(...arguments)
    this.state = {
      categories: null,
      collections: null,
      value: ''
    }
  }
  componentWillMount() { }

  async componentDidMount() {
    const data = await graphqlClient.query({ query: HomePageGQL, variables: {} });
    console.log(data.data)
    this.setState({
      categories: data.data.categories,
      collections: data.data.collections
    })
  }
  onChange(value) {
    this.setState({
      value: value
    })
  }


  render() {
    const { categories, collections } = this.state
    const swiper_item = categories?.edges.map((edge, index) => {
      const category = edge.node
      return (
        <SwiperItem>
          <View>
            <Image className='swiper-img' src={category.backgroundImage.url}></Image>
          </View>
        </SwiperItem>
      )
    })
    const collection_item = collections?.edges.map((edge, index) => {
      const collection = edge.node
      const product_item = collection?.products.edges.map((edge2, index2) => {
        const product = edge2.node
        return (
          {
            image: product.thumbnail.url,
            value: product.name
          }
        )
      })
      return (
        <View>
          <Text className='collection-name'>{collection.name}</Text>
          <AtGrid
            data={product_item}
          />
        </View>
      )
    })
    return (
      <View className='index'>
        <AtSearchBar
          value={this.state.value}
          onChange={this.onChange.bind(this)}
        />
        <Swiper
          indicatorColor='#999'
          indicatorActiveColor='#333'
          indicatorDots
          autoplay>
          {swiper_item}
        </Swiper>
        <View className='collection'>
          {collection_item}

        </View>
      </View>
    )
  }
}
