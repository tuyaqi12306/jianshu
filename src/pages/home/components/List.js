import React, {PureComponent} from 'react'
import { ListItem, ListInfo, LoadMore } from '../style'
import {connect} from 'react-redux'
import {actionCreators} from '../store'
import {Link} from 'react-router-dom'
class List extends PureComponent {
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
                  <Link  to={'/detail/' + item.get('id')}>
                    <h2 className='title'>{item.get('title')}</h2>
                  </Link>
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
