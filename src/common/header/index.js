import React from 'react'
import { connect } from 'react-redux'
import {HeaderWrapper, Logo, Nav, NavItem, SearchWrapper, NavSearch, Addition, Button} from './style'
import { CSSTransition } from 'react-transition-group'
// import * as actionCreators from './store/actionCreators'
class Header extends React.Component{
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
const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
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
