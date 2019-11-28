import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {DetailWrapper, Header, Content} from './style'
import {withRouter} from 'react-router-dom' // 获得router里的参数
import {actionCreators} from './store'
class Detail extends PureComponent {
  render() {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}}
        />
      </DetailWrapper>
    )
  }
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getDetail(id)
  }
}
const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})
const mapDispatch = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id))
  }
})
export default connect(mapStateToProps, mapDispatch)(withRouter(Detail))
