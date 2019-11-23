import React, {Component} from 'react'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import {HomeWrapper, HomeLeft, HomeRight} from './style'
class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    )
  }
}
export default Home
