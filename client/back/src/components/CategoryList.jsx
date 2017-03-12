import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import { getCategory } from '../utils/request';

class CategoryList extends Component {
        constructor (props) {
        super(props);

        this.state = {
            categoryList:[]
        };
    }

    componentWillMount() {
        getCategory()
            .then(res => {
                this.setState({
                    categoryList: res
                });
            });
    }

    renderCategory() {
        let {categoryList} = this.state;
        let idx = 0;
        return categoryList.map( category => {
            idx++;
            return (
                <tr key={idx}>
                    <td>{category.name}</td>
                    <td className='postNum'>
                        <a href='#'>5</a>
                    </td>
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
                    <th>类别</th>
                    <th>文章</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                    {this.renderCategory()}
                </tbody>
            </Table>
        );
    }
}

export default CategoryList;