import React, {Component} from 'react'

class Detail extends Component {
  render() {
    return (
      <div>detail  </div>
    )
  }
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getDetail(id)
  }
}
export default Detail
  getDetail(id) {
    dispatch(actionCreators.getDetail(id))
