import React, { Component, PropTypes } from 'react';
import { Button } from 'reactstrap';
import { getPostById, getCategory } from '../utils/request';
import Editor from '../components/Editor-mde.jsx';
import Tools from '../components/Tools.jsx';
import Loading from '../components/Loading.jsx';

class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: {},
            category: [],
            isUpdate: false, 
            loadEnd: 0
        }
        
    }
    
    componentDidMount() {
        let id = this.props.params.id || ''; 
        if (id) {
            Promise.all([getPostById(id), getCategory()])
                .then(values =>{
                    this.setState({
                        post: values[0],
                        category: values[1],
                        isUpdate: true
                    });
                })
        } else {
            // 写新文章,只需获取分类
            getCategory()
                .then(res => {
                    this.setState({
                        category: res,
                        isUpdate: false
                    });
                });
        }
    }

    renderEditor() {
        if (!this.state.category.length) {
           return <Loading />
        }else if(this.state.category.length) {
            return (
                <Editor post={this.state.post} category={this.state.category} isUpdate={this.state.isUpdate}/>
            );
        }
    }

    render() {
        return (
            <div className='editPage'>
                <Tools title={this.state.isUpdate ? '编辑文章' : '写文章'}>
                    <Button className='btn-primary-outline' color="primary" size='sm'
                        form='editForm'>
                        {this.state.isUpdate ? '提交编辑' : '提交文章'}
                    </Button>
                </Tools>
                <div className='content-wrapper'>
                    {this.renderEditor()}
                </div>
            </div>
        );
    }
}

export default Edit;