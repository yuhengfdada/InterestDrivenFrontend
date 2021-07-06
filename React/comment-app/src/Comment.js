import {React, Component} from 'react';
import ReactDOM from 'react-dom';

class Comment extends Component {
    render () {
      return (
        <div className='comment'>
          <div className='comment-user'>
            <span>{this.props.commentInfo.name} </span>：
          </div>
          <p>{this.props.commentInfo.comment}</p>
        </div>
      )
    }
  }
  
  export default Comment