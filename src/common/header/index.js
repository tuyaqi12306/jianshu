import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
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

const getListArea = (show) => {
  if (show) {
    return (
      <SearchInfo>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch>换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>简书</SearchInfoItem>
          <SearchInfoItem>生活</SearchInfoItem>
          <SearchInfoItem>投稿</SearchInfoItem>
          <SearchInfoItem>书籍</SearchInfoItem>
          <SearchInfoItem>考研</SearchInfoItem>
        </SearchInfoList>
      </SearchInfo>
    )
  }else {
    return null
  }
}

const Header = (props) => {
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
              in={props.focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch
                className={props.focused ? 'focused' : ''}
                onFocus={props.handleInputFocus}
                onBlur={props.handleInputBlur}
              >
              </NavSearch>
            </CSSTransition>
            <i className={props.focused ? 'focused iconfont' : 'iconfont'}> &#xe62a;</i>
            {getListArea(props.focused)}
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
const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header','focused'])
    // focused: state.get('header').get('focused') // 得使用immutable得get方法来得到数据,与上一行等价
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
