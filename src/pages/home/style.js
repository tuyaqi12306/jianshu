import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
`
export const HomeRight = styled.div`
  width: 240px;
  float: right;
`
export const ListItem = styled.div`
  box-sizing: border-box;
  height: 200px;
  padding: 20px 0;
  margin-buttom: 15px;
  border-buttom: 1px solid #dcdcdc;
  overflow: hidden;
  .pic {
    width: 125px;
    height: 100px;
    margin-top: 50px;
    display: block;
    float: right;
  }
`
export const ListInfo = styled.div`
width: 500px;
float: left;
.title {
  line-height: 27px;
  font-size: 18px;
  font-weight: blod;
  color: #333;
}
.desc {
  line-height: 24px;
  color: #999;
  font-size: 13px;
  overflow: hidden; /* 溢出时不显示溢出的内容 */
  text-overflow: ellipsis; /* 发生溢出时使用省略号代替 */
  display: -webkit-box; /* chrome浏览器的私有属性。显示为box。 */
  -webkit-box-orient: vertical; /* 垂直排列元素 */
  -webkit-line-clamp: 3; /* 显示多少行 */
}

`
