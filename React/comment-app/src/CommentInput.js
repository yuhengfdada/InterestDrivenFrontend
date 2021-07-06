import { React, Component } from 'react';
import ReactDOM from 'react-dom';
import CommentApp from './CommentApp';
import './index.css';

class CommentInput extends Component {
    constructor() {
        super()
        this.state = {
            name : '',
            comment : '',
        }
    }

    nameChange(e) {
        this.setState({name : e.target.value})
    }

    commentChange(e) {
        this.setState({comment : e.target.value})
    }

    buttonClicked(e) {
        this.props.submit(this.state)
        this.setState({comment : ''})
    }

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.name}
                        onChange={this.nameChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea value={this.state.comment}
                        onChange={this.commentChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.buttonClicked.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}

export default CommentInput;