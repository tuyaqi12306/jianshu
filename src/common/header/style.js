import styled from 'styled-components'
import logoPic from '../../statics/logo.jpg'
// 带样式的div标签
export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
  box-sizing: border-box;
`
export const Logo = styled.a.attrs({ // 传入属性
  href: '/'
})`
  display: block;
  width: 100px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  vertical-align: middle;
  cursor: pointer;
  background: url(${logoPic}); ${'' /*不能直接插入文件路径 */}
  background-size: contain; ${'' /* 背景图片尺寸设置 */}

`
export const Nav = styled.div`
  width: 945px;
  height: 100%;
  box-sizing: border-box;
  ${'' /* box-sizing属性不能继承，border-box表示设置的width包含边框和内边距以及内容区 */}
  xpadding: 0 70px;
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
  .slide-enter {
    width: 160px;
    transition: all 0.2s ease-out;
  }
  .slide-enter-active {
    width: 240px;
  }
  .slide-exit {
    width: 240px;
    transition: all 0.2s ease-out;
  }
  .slide-exit-active {
    width: 160px;
  }
  .iconfont {
    position: absolute;
    right: 15px;
    top: 20px;
    width: 30px;
    border-radius: 15px;
    text-align: center;
    line-leight: 30px;
    &.focused {
      background-color: #777;
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
`
export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
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