import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`

export const HomeLeft = styled.div`
  float: left;
  box-sizing: border-box;
  padding: 30px 0 0 15px;
  width: 640px;
  padding-top: 30px;
`
export const ListItem = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 200px;
  padding: 10px 0;
  margin-bottom: 15px;
  border-bottom: 1px solid #f0f0f0;
  line-height: 20px;
  word-wrap: break-word;
  overflow: hidden;
  .pic {
    display: block;
    float: right;
    width: 150px;
    height: 100px;
    box-sizing: border-box;
    margin-top: 30px;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
    cursor: pointer;
    vertical-align: middle;
  }
`
export const ListInfo = styled.div`
  width: 460px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: 700;
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
export const HomeRight = styled.div`
  float: right;
  box-sizing: border-box;
  width: 280px;
  margin-left: 40px;
  padding-top: 30px;
`
export const RecommendWrapper = styled.div`
  width: 280px;
  box-sizing: border-box;
  margin-top: -4px;
  padding-bottom: 4px;
  min-height: 228px;
  margin: 30px 0;
  color: #333;
`
export const RecommendItem = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 6px;
  border-radius: 6px;
  cursor: pointer;
  background: url(${(props) => props.imgUrl});
  background-size: cover;
`
export const WriterWrapper = styled.ul`
  height: 300px;
  padding: 10px;
  box-sizing: border-box;
  border-top: 1px solid #dcdcdc;
  margin-bottom: 20px;
  font-size: 13px;
  color: #333;
  list-style: none;
`
export const WriterItem = styled.li`
  margin: 10px;
  .photo {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    cursor: pointer;
    background: url(${(props) => props.imgUrl});
    background-size: cover;
    vertical-align: middle;
    margin-right: 10px;
  }
`
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 30px 0;
  background-color: #a5a5a5;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`
export const BackTop = styled.div`
  position: fixed;
  right:40px;
  bottom: 40px;
  z-index: 999;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
  border: 1px solid #ccc;
  cursor: pointer;
`
