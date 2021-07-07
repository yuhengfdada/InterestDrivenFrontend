import { React, Component } from 'react';
import ReactDOM from 'react-dom';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component {
    constructor() {
        super()
        this.state = {
            commentInfo: []
        }
    }

    _getCommentInfo() {
        let info = localStorage.getItem('commentInfo')
        if (info) {
            this.setState({commentInfo : JSON.parse(info)})
        }
    }

    _saveCommentInfo() {
        localStorage.setItem('commentInfo', JSON.stringify(this.state.commentInfo))
    }

    componentDidMount() {
        this._getCommentInfo()
    }
    receivedComments(commentInfo) {
        this.state.commentInfo.push(commentInfo)
        this.setState({ commentinfo: this.state.commentInfo })
        this._saveCommentInfo()
    }
    render() {
        return (
            <div className="wrapper">
                <CommentInput submit={this.receivedComments.bind(this)} />
                <CommentList commentInfo={this.state.commentInfo} />
            </div>
        )
    }
}

export default CommentApp;