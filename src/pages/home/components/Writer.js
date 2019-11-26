import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {WriterWrapper, WriterItem} from '../style'

class Writer extends PureComponent {
  render() {
    return (
      <WriterWrapper>
        {
          this.props.list.map((item) => {
            return (
              <WriterItem key={item.get('id')}>
                <img alt='' className='photo' src={item.get('imgUrl')}></img>
                {item.get('name')}
              </WriterItem>
            )
          })
        }
      </WriterWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'writerList'])
})
export default connect(mapStateToProps, null)(Writer)
