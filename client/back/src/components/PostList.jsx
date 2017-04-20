import React, { Component, PropTypes } from 'react';
import { Table, Button  } from 'reactstrap';
// import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Modal from '../components/Modal.jsx';
import { Link } from 'react-router';
import Loading from '../components/Loading.jsx';

class PostList extends Component {
    static propTypes = {
        postList: PropTypes.array,
        modal: PropTypes.bool, 
        handelToggle: PropTypes.func,
        handelDelete: PropTypes.func,
    }
 
    renderPost() {
        let {postList, handelToggle} = this.props;

        let idx = 0;
        return postList && postList.map(post => {
            idx++;
            return (
                 <tr key={idx}>
                    <th scope="row">{idx}</th>
                    <td>{post.title}</td>
                    <td>{post.category}</td>
                    <td>
                        <Link to={`/admin/manage/edit/${post['_id']}`} className='btn btn-primary-outline btn-sm'>编辑</Link>
                        <Link onClick={() => handelToggle((post))} className='btn btn-danger-outline btn-sm'>删除</Link>   
                    </td>
                </tr>
            )
        })
    }

    render() {
        let {postList, modal, handelToggle, handelDelete} = this.props;

        if (!postList.length) {
            return <Loading />
        } else {
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
                    
                    <Modal modal={modal} handelToggle={handelToggle} handelDelete={handelDelete}/>
                </div>
            );
        }
    }
}

export default PostList;