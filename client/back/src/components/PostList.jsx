import React, { Component } from 'react';
import { Table, Button  } from 'reactstrap';
// import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Modal from '../components/Modal.jsx';
import { Link } from 'react-router';

class PostList extends Component {
 
    renderPost() {
        let {postList, toggle} = this.props;

        let idx = 0;
        return postList && postList.map(post => {
            idx++;
            return (
                 <tr key={idx}>
                    <th scope="row">{idx}</th>
                    <td>{post.title}</td>
                    <td>{post.category}</td>
                    <td>
                        <Link to={`/manage/edit/${post['_id']}`} className='btn btn-primary-outline btn-sm'>编辑</Link>
                        <Link onClick={() => toggle((post))} className='btn btn-danger-outline btn-sm'>删除</Link>   
                    </td>
                </tr>
            )
        })
    }

    render() {
        let {postList, modal, toggle, handelDelete} = this.props;

        return (
            <div className='table-wrapper'> 
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
                
                <Modal modal={modal} toggle={toggle} handelDelete={handelDelete}/>
            </div>
        );
    }
}

export default PostList;