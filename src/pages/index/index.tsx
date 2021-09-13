import { Component } from 'react'
import { View, Swiper, SwiperItem , Image, Text, } from '@tarojs/components'
import { AtGrid } from "taro-ui"
import graphqlClient from "../../utils/graphql-client";

import './index.scss'
import { HomePageGQL } from './queries';
import { HomePage } from './__generated__/HomePage';


export default class Index extends Component <{}, HomePage>{
  state = {
    categories: null,
    collections: null
  }
  componentWillMount() { }

  async componentDidMount() {
   const data = await graphqlClient.query({query:HomePageGQL, variables: {}});
   console.log(data.data)
    this.setState({
      categories: data.data.categories,
      collections: data.data.collections
    })
  }


  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const {categories, collections} = this.state
    console.log(categories)
    console.log(collections)
    const swiper_item = categories?.edges.map((edge, index) => {
      const category = edge.node
      return (
        <SwiperItem>
          <Image src={category.backgroundImage.url}></Image>
        </SwiperItem>
      )
    })
    const collection_item = collections?.edges.map((edge, index) => {
      const collection = edge.node
      const product_item = collection?.products.edges.map((edge, index) => {
        const product = edge.node
        return (
          {
            image: product.thumbnail.url,
            value: product.name
          }
        )
      })
      console.log(product_item)
      return (
        <View>
          <Text>{collection.name}</Text>
          <AtGrid 
          data={product_item}
          />
        </View>
      )
    })
    return (
      <View className='index'>
        <Swiper
        className='test-h'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        indicatorDots
        autoplay>
          {swiper_item}
        </Swiper>
        {collection_item}
      </View>
    )
  }
}
