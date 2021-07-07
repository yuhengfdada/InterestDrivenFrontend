import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import CommentApp from './CommentApp';
import './index.css';
import PropTypes from 'prop-types'

class CommentInput extends Component {
    static propTypes = {
        submit: PropTypes.func
    }

    constructor() {
        super()
        let n = localStorage.getItem('username')
        this.state = {
            name: n ? n : '',
            comment: '',
        }
    }

    componentDidMount() {
        this.commentNode.focus()
    }

    nameChange(e) {
        this.setState({ name: e.target.value })
    }

    nameBlur() {
        localStorage.setItem('username', this.state.name)
    }

    commentChange(e) {
        this.setState({ comment: e.target.value })
    }

    buttonClicked(e) {
        this.props.submit(
            {
                name: this.state.name,
                comment: this.state.comment,
                createdTime: +new Date() // convert date to number
            }
        )
        this.setState({ comment: '' })
    }

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.name}
                            onChange={this.nameChange.bind(this)}
                            onBlur={this.nameBlur.bind(this)} />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea ref={(commentNode) => this.commentNode = commentNode}
                            value={this.state.comment}
                            onChange={this.commentChange.bind(this)} />
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