import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loadPostsAction} from '../actions/post_action'

class PostList extends Component {
    constructor(props) {
        super(props)
        console.log(this.props);
    }

    componentDidMount() {
        this.props.dispatch(loadPostsAction);
    }

    render() {
        const { list } = this.props.post;

        const Posts = list.map(post => {
            return (<li key={post.id}>{post.title}</li>)
        })
        return (
            <div>
                {Posts}
            </div>
        )
    }
}

const mapStateTopProps = (state, ownProps) => {
    return {
        post: state.post
    }
}

export default connect(mapStateTopProps)(PostList);
