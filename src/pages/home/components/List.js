import React, {Component} from 'react'
import { ListItem, ListInfo, LoadMore } from '../style'
import {connect} from 'react-redux'
import {actionCreators} from '../store'
class List extends Component {
  render() {
    const { list, page } = this.props
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <ListItem key={index}>
                <img className='pic' alt='' src={item.get('imgUrl')}></img>
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>
                    {item.get('desc')}
                  </p>
                </ListInfo>
              </ListItem>
            )
          })
        }
        <LoadMore onClick={() => this.props.getMoreList(page)}>阅读更多</LoadMore>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    list: state.get('home').get('articleList'),
    page: state.getIn(['home', 'articlePage'])
  }
}
const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    const action = actionCreators.getMoreList(page)
    dispatch(action) // 异步操作，派发一个函数
  }
})
export default connect(mapStateToProps, mapDispatch)(List)
