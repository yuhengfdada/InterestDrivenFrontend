import { React, Component } from 'react';
import ReactDOM from 'react-dom';

class Comment extends Component {
  constructor() {
    super()
    this.state = {
      timeString : ''
    }
  }
  _updateTimeString() {
    const duration = (+Date.now() - this.props.commentInfo.createdTime) / 1000
    this.setState({
      timeString: duration > 60
        ? `${Math.round(duration / 60)} 分钟前`
        : `${Math.round(Math.max(duration, 1))} 秒前`
    })
  }

  componentDidMount() {
    this._updateTimeString()
    this._timer = setInterval(
      this._updateTimeString.bind(this),
      5000
    )
  }

  deleteClicked() {
    this.props.submitDelete(this.props.index)
  }

  render() {
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{this.props.commentInfo.name} </span>：
        </div>
        <p>{this.props.commentInfo.comment}</p>
        <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
        <span onClick={this.deleteClicked.bind(this)}
        className='comment-delete'>
          删除
        </span>
      </div>
    )
  }
}

export default Comment