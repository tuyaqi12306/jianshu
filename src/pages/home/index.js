import React, {Component} from 'react'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
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
        {this.props.showScroll && <BackTop onClick={this.handleScrollTop}> ^ </BackTop>}
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeHomeData)
  }
  handleScrollTop = () => {
    window.scroll(0,0)
  }
  bindEvents = () => {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}
const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})
const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo()
    dispatch(action)
  },
  changeScrollTopShow(e) {
    if (document.documentElement.scrollTop > 100) {
      const action = actionCreators.togleTopShow(true)
      dispatch(action)
    }else {
      const action = actionCreators.togleTopShow(false)
      dispatch(action)
    }
  }
})
export default connect(mapStateToProps, mapDispatch)(Home)
