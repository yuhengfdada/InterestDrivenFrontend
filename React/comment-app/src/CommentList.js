import {React, Component} from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';

class CommentList extends Component {
    static defaultProps = {
        commentInfo : []
    }

    onSubmitDelete(index) {
        this.props.submitDelete(index)
    }
    
    render() {
        return (
            <div>
                {this.props.commentInfo.map(
                    (oneComment, i) => <Comment commentInfo={oneComment} key={i} index={i} submitDelete={this.onSubmitDelete.bind(this)}/>
                )}
            </div>
        )
    }
}

export default CommentList;