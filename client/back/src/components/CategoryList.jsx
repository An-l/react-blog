import React, { Component, PropTypes } from 'react';
import { Table, Button, Input } from 'reactstrap';
// import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Modal from '../components/Modal.jsx';


class CategoryList extends Component {
    static propTypes = {
        categoryList: PropTypes.array,
        modal: PropTypes.bool, 
        addCategory: PropTypes.string,
        handelInputChange: PropTypes.func,
        handelAddInputChange: PropTypes.func,
        handelAddClick: PropTypes.func, 
        handelUpdate: PropTypes.func,
        handelDelete: PropTypes.func,
        handelToggle: PropTypes.func,
    }
    
    renderCategory() {
        let idx = 0;
        return this.props.categoryList && this.props.categoryList.map( category => {
            idx++;
            return (
                <tr key={idx}>
                    <th scope="row">{idx}</th>
                    <td>
                        <Input className="" type="text"
                            value={category.name}
                            ref={category['_id']}
                            onChange={(e)=> this.props.handelInputChange(e, category)}/>
                    </td>
                    <td className='postNum'>
                        <a href={`an-l.cn/category/${category.name}`}>{category.count || 0}</a>
                    </td>
                    <td>
                        <Button onClick={() => this.props.handelUpdate(category)} className='btn-primary-outline' color="primary" size="sm">编辑</Button>{' '}
                        <Button onClick={() => this.props.handelToggle(category)}  className='btn-danger-outline' color="danger" size="sm">删除</Button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className='table-wrapper'> 
                <Table hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>类别</th>
                            <th>文章</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCategory()}
                        <tr>
                            <th>Last</th>
                            <td>
                                <Input placeholder="类别名" size='sm' className='table-addInput'
                                    value={this.props.addCategory}
                                    onChange={this.props.handelAddInputChange}/>
                            </td>
                            <td></td>
                            <td>
                                <Button className="btn-info-outline" size="sm" onClick={this.props.handelAddClick}>添加</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <Modal modal={this.props.modal} handelToggle={this.props.handelToggle} handelDelete={this.props.handelDelete}/>
            </div>
        );
    }
}

export default CategoryList;