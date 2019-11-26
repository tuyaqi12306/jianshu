import styled from 'styled-components'
import logoPic from '../../statics/logo.jpg'
// 带样式的div标签
export const HeaderWrapper = styled.div`
  min-width: 768px;
  max-width: 1440px;
  margin: 0 auto;
  height: 56px;
  position: relative;
  font-size: 17px;
  box-sizing: border-box;
  ::after {
    content: '';
    display: block;
    width: 100%;
    clear: both;
    border-bottom: 1px solid #f0f0f0;
  }
`
export const Logo = styled.a.attrs({ // 传入属性
  href: '/'
})`
  float: left;
  display: block;
  width: 100px;
  height: 56px;
  cursor: pointer;
  background-color: transparent;
  box-sizing: border-box;
  img {
    height: 100%;
    width: 100%;
    background-color: #fff;
  }
`
export const Nav = styled.div`
  @media (min-width: 992px) {
    width: 960px;
    padding: 0;
    overflow: visible;
  }
  @media (max-width: 1080px) {
    width: 750px;
  }
  width: 960px;
  height: 100%;
  box-sizing: border-box;
  padding: 0 15px;
  margin: 0 auto;
  color: #333;
  position: relative;
`
export const NavItem = styled.div`
  height: 56px;
  line-height: 56px;
  color: #333;
  font-size: 17px;
  padding: 0 15px;
  &.left {
    float: left;
  }
  &.right {
    float: right;
  }
  &.active {
    color: #ea6f5a;
  }
`
export const SearchWrapper = styled.div`
  xwidth: 165px;
  height: 56px;
  position: relative;
  float: left;
  margin-right: 5px;
  padding-left: 15px;
  .zoom {
    position: absolute;
    right: 5px;
    top: 12px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    text-align: center;
    line-height: 30px;
    font-weight: 400;
    font-size: 17px;
    color: #969696;
    cursor: pointer;
    &.focused {
      background-color: rgb(150,150,150);
      color: #fff;
    }
  }
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 150px;
  height: 38px;
  box-sizing: border-box; ${'' /* 防止padding撑大盒子 */}
  display:block;
  font-size: 14px;
  line-height: 20px;
  border: 1px solid #eee;
  border-radius: 40px;
  padding: 0 20px 0 20px;
  background: #eee;
  ${'' /* xposition: absolute; 不能使用绝对定位，子元素脱离文档流，父元素的宽度会为0，动画的时候父元素的宽度无法自适应 */}
  margin-top: 8px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    width: 160px;
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    width: 240px;
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  width: 240px;
  xheight: 100px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background-color: #fff;
`
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 10px;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform: rotate(0deg);
    transform-origin: center center;
  }
`
export const SearchInfoList = styled.div`
  overflow: hidden;
`
export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  line-height: 20px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  font-size: 12px;
`
export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  ${'' /* float: right; */}
  height: 56px;
`
export const Button = styled.div`
  float: right;
  line-height: 38px;
  margin-top: 8px;
  margin-right: 20px;
  padding: 0 20px;
  border: 1px solid #ec6149;
  border-radius: 19px;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background-color: #ec6149;
  }
`
