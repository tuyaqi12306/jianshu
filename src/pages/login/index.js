import React, {PureComponent} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {LoginWrapper, LoginBox, Input, Button} from './style'
import {actionCreators} from './store'
class Login extends PureComponent {
  render() {
    const {loginStatus} = this.props
    if(loginStatus) {
      return <Redirect to='/'/> // 直接跳转到该路径
    }else {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' ref={(input) => this.account = input}></Input>
            {/* innerRef拿到真实的DOM */}
            <Input placeholder='密码' type='password' ref={(input) => this.password = input}></Input>
            <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }
  }
}
const mapStateToProps = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
})
const mapDispatch = (dispatch) => ({
  login(accountElement, passwordElement) {
    console.log(111,accountElement, passwordElement)
    // const accountValue = accountElement.value
    // const passwordValue = passwordElement.value
    dispatch(actionCreators.login(accountElement, passwordElement))
  }
})
export default connect(mapStateToProps, mapDispatch)(Login)
