import React, { Component } from 'react';
import { Table, Button  } from 'reactstrap';

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
                        <Button className='btn-primary-outline' color="primary" size="sm">编辑</Button>{' '}
                        <Button className='btn-danger-outline' color="danger" size="sm">删除</Button>
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