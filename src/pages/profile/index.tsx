import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  async componentDidMount () { 

      const res = await Taro.login()
      Taro.setStorageSync("Authorization", "")
      const ret = Taro.request({url: 'https://saleor.acquirecord.top/plugins/riiy.spwm/get-token/', 
      data: {code: res.code }})
      ret.then(r => {
        console.log(r.data)
      })
      Taro.setStorageSync("Authorization", "Token " )
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
