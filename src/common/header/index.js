import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import {Link} from 'react-router-dom'
import logoPic from "../../statics/logo.png"
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
import {actionCreators as loginActionCreators} from '../../pages/login/store'

class Header extends React.Component{
  getListArea = (show) => {
    const {list, page, totalPage, mouseIn} = this.props
    const newList = list.toJS() // 将immutable对象变为普通数组
    const pageList = []
    if (newList.length) { // 第一次newList为空，key都为undefined
      for(let i = page * 10; i < (page + 1) * 10; i++) {
        pageList.push(<SearchInfoItem key={newList[i]}> {newList[i]} </SearchInfoItem>)
      }
    }

    if (show || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={this.props.handleMouseEnter}
          onMouseLeave={this.props.handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => this.props.handleChangePage(page, totalPage, this.spinIcon)}
            >
              <i ref={(icon) => {this.spinIcon = icon}} className='iconfont spin'>&#xe600;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              pageList
            }
              {/* this.props.list.map((item) => {
                return <SearchInfoItem key={item}> {item} </SearchInfoItem>
              }) */}
          </SearchInfoList>
        </SearchInfo>
      )
    }else {
      return null
    }
  }
  render() {
    const {focused, list, login} = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo>
            <img src={logoPic} alt=""/>
          </Logo>
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          {
            login ?
            <NavItem className='right' onClick={this.props.logout}>退出</NavItem> :
            <Link to='/login'>
              <NavItem className='right'>登录</NavItem>
            </Link>
          }
          <NavItem className='right'>
            <i className='iconfont'>&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                // onFocus={this.props.handleInputFocus}
                onFocus={() => this.props.handleInputFocus(list)}
                onBlur={this.props.handleInputBlur}
              >
              </NavSearch>
            </CSSTransition>
            <i className={ focused ? 'focused iconfont zoom' : 'iconfont zoom'}> &#xe62a;</i>
            {this.getListArea(focused)}
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
      const result = res.data // 拿到的响应体数据部分
      let data = result.data
      const action = {
        type: 'changeListData',
        data: data, //拿到数据的data字段
        totalPage: Math.ceil(data.length / 10)
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
    list: state.getIn(['header','list']),
    page: state.getIn(['header','page']),
    totalPage: state.getIn(['header','totalPage']),
    mouseIn: state.getIn(['header','mouseIn']),
    login: state.getIn(['login', 'login'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      const action = {
        type: 'searchFocus'
      }
      dispatch(action)
      dispatch(getList())
      // (list.size === 0) && dispatch(getList()) // focus状态下还需派发list数据
      // 注意！这里接收到的不是对象而是一个函数，所以必须使用redux-thunk这个中间键
    },
    handleInputBlur() {
      const action = {
        type: 'searchBlur'
      }
      dispatch(action)
      // dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      const action = {
        type: 'mouseEnter'
      }
      dispatch(action)
    },
    handleMouseLeave() {
      const action = {
        type: 'mouseLeave'
      }
      dispatch(action)
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      }else {
        originAngle = 0
      }
      spin.style.transform = "rotate(" + (originAngle + 360) + "deg)"

      const action = {
        type: 'changePage'
      }
      dispatch(action)
    },
    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header) // 当前组件和store做连接
