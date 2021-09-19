import { Component } from 'react'
import { View, Text, SwiperItem } from '@tarojs/components'
import { AtGrid, AtList, AtListItem, AtSearchBar } from "taro-ui"
import graphqlClient from "../../utils/graphql-client";
import { CategoryGQL } from './queries'

import './index.scss'

export default class Index extends Component {

  constructor() {
    super(...arguments)
    this.state = {
      value: '',
      data: null,
      children:null
    }
  }
  componentWillMount() { }

  async componentDidMount() {
    const data = await graphqlClient.query({ query: CategoryGQL, variables: {} });
    this.setState({
      data:data.data.categories,
      children:data.data.categories.edges[0].node.children
    })

  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  onChange(value) {
    this.setState({
      value: value
    })
  }
  LeftClick(value){
    console.log(value)
    this.setState(
      {
        children: this.state.data.edges[value].node.children
      }
    )
  }
  render() {
    const {data, children} = this.state
    console.log(data)
    const left_view = data?.edges.map((edge, index) => {
      const category = edge.node
      return (
        <View onClick={this.LeftClick.bind(this, index)}>
          {category.name}
        </View>
      )
    })
    const child_view = children?.edges.map((edge, index) => {
      const category = edge.node

        return (
          {
            image: category.backgroundImage.url,
            value: category.name
          }
        )
    })
    return (
      <View className='index'>
        <AtSearchBar
          value={this.state.value}
          onChange={this.onChange.bind(this)}
        />
        <View className='at-row'>
          <View className='at-col at-col-3'>
            {left_view}
          </View>
          <View className='at-col'>
            <View className='at-row at-row__justify--between'>
              <Text>生鲜食品</Text>
              <Text>查看更多</Text>
            </View>

          <AtGrid
            data={child_view}
          />
          </View>
        </View>
      </View>
    )
  }
}
