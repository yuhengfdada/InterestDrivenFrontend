import {React, Component} from 'react';
import ReactDOM from 'react-dom';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component {
constructor() {
    super()
    this.state = {
        commentInfo : []
    }
}

    receivedComments(commentInfo) {
        this.state.commentInfo.push(commentInfo)
        this.setState({commentinfo : this.state.commentInfo})
    }
    render() {
        return (
            <div className="wrapper">
                <CommentInput submit={this.receivedComments.bind(this)}/>
                <CommentList commentInfo={this.state.commentInfo}/>
            </div>
        )
    }
}

export default CommentApp;