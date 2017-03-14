import React, { Component } from 'react';
import { Table, Button  } from 'reactstrap';
import { Link } from 'react-router';

import { getPostList } from '../utils/request';    

class PostList extends Component {
    constructor (props) {
        super(props);

        this.state = {
            postList:[]
        };
    }

    componentWillMount() {
        getPostList()
            .then(res => {
                this.setState({
                    postList: res
                });
            });
    }

    handelEdit() {

    }

    renderPost() {
        let {postList} = this.state;
        let idx = 0;
        return postList.map(post => {
            idx++;
            return (
                 <tr key={idx}>
                    <th scope="row">{idx}</th>
                    <td>{post.title}</td>
                    <td>{post.category}</td>
                    <td>
                        <Link to={`/edit/${post['_id']}`} className='btn btn-primary-outline btn-sm'>编辑</Link>
                        <Link to={`/edit/${post['_id']}`} className='btn btn-danger-outline btn-sm'>删除</Link>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Table hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>文章名</th>
                    <th>分类</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {this.renderPost()}
                </tbody>
            </Table>
        );
    }
}

export default PostList;