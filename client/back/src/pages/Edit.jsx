import React, { Component } from 'react';
import { getPostById, getCategory } from '../utils/request';
import Editor from '../components/Editor-mde.jsx';
import Tools from '../components/Tools.jsx';

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
        id && this.setState({isUpdate: true}); //如果存在id则说明在编辑文章状态，
        // 获取分类数组
        getCategory()
            .then(res => {
                this.setState({
                    category: res,
                    loadEnd: this.state.loadEnd+1
                });
            });

        // 如果在编辑文章状态，获取文章对象
        id && getPostById(id)
            .then(res => {
                this.setState({
                    post: res,
                    loadEnd: this.state.loadEnd+1
                });
            });
    }

    //  componentDidUpdate (prevProps) {
    //     // 上面步骤3，通过参数更新数据
    //     let oldId = prevProps.params.invoiceId
    //     let newId = this.props.params.invoiceId
    //     debugger
    // }

    renderEditor() {
        return (
            !this.state.isUpdate ? this.state.loadEnd === 1 && <Editor post={this.state.post} category={this.state.category} isUpdate={this.state.isUpdate}/>
                                : this.state.loadEnd === 2 && <Editor post={this.state.post} category={this.state.category} isUpdate={this.state.isUpdate}/>
        );
    }

    render() {   
        return (
            <div>
                <Tools title='写文章'/>
                <div className='content-wrapper'>
                    {this.renderEditor()}
                </div>
            </div>
        );
    }
}

export default Edit;