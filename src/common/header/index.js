import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import axios from 'axios'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from './style'
// import * as actionCreators from './store/actionCreators'

class Header extends React.Component{
  constructor(props) {
    super(props)
  }
  getListArea = (show) => {
    if (show) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              this.props.list.map((item) => {
                return <SearchInfoItem key={item}> {item} </SearchInfoItem>
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    }else {
      return null
    }
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className='iconfont'>&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch
                className={this.props.focused ? 'focused' : ''}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              >
              </NavSearch>
            </CSSTransition>
            <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}> &#xe62a;</i>
            {this.getListArea(this.props.focused)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            <i className='iconfont'>&#xe603;</i>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}
const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => { // 文件路径先找路由下的，找不到找public文件夹下的
      const data = res.data // 拿到的响应体数据部分
      const action = {
        type: 'changeListData',
        data: data.data ////拿到数据的data字段
      }
      dispatch(action)
      //redux工作流：改变store的数据，创建一个action，由dispatch派发给reducer，接手之后返回一个新的对象再渲染即可。
    }).catch((e) => {
      console.log('error')
    })
  }
}
const mapStateToProps = (state) => { // 拿到数据
  return {
    focused: state.getIn(['header','focused']),
    // focused: state.get('header').get('focused') // 得使用immutable得get方法来得到数据,与上一行等价
    list: state.getIn(['header','list'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = {
        type: 'searchFocus'
      }
      dispatch(action)
      //将这里的action换为一个函数，type为一个常量而不是一个字符串
      // dispatch(actionCreators.searchFocus())
      dispatch(getList()) // focus状态下还需派发list数据
    },
    handleInputBlur() {
      const action = {
        type: 'searchBlur'
      }
      dispatch(action)
      // dispatch(actionCreators.searchBlur())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
