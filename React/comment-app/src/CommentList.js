import {React, Component} from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';

class CommentList extends Component {
    static defaultProps = {
        commentInfo : []
    }
    
    render() {
        return (
            <div>
                {this.props.commentInfo.map(
                    (oneComment, i) => <Comment commentInfo={oneComment} key={i}/>
                )}
            </div>
        )
    }
}

export default CommentList;