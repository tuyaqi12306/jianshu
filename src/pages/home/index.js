import React, {Component} from 'react'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import axios from 'axios'
import {connect} from 'react-redux'
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
  componentDidMount() {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data
      const action = {
        type: 'change_HomeData',
        articleList: result.articleList,
        recommendList: result.recommendList,
        writerList: result.writerList,
      }
      this.props.changeHomeData(action)
    })
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData(action) {
    dispatch(action)
    console.log('action', action)
  }
})

export default connect(null, mapDispatch)(Home)
