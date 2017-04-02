import React, { Component } from 'react';
import CategoryList from '../components/CategoryList.jsx';
import Tools from '../components/Tools.jsx';
import { getCategory, createCategory, updateCategoryById, deleteCategoryById } from '../utils/request';

class Category extends Component {
    constructor (props) {
        super(props);

        this.state = {
            categoryList:[],
            modal: false,
            activeCategory: '',
            addCategory: ''
        };
        this.toggle = this.toggle.bind(this);
        this.handelAddInputChange = this.handelAddInputChange.bind(this);
        this.handelAddClick = this.handelAddClick.bind(this);
        this.handelUpdate = this.handelUpdate.bind(this);
        this.handelInputChange = this.handelInputChange.bind(this);
        this.handelDelete = this.handelDelete.bind(this);
    }

    componentDidMount() {
        getCategory()
            .then(res => {
                this.setState({
                    categoryList: res
                });
            });
    }

    toggle(category) {
        this.setState({
            modal: !this.state.modal,
            activeCategory: category || ''
        });
    }
    handelAddInputChange(e) {
        this.setState({
            addCategory: e.target.value
        });
    }

    handelAddClick() {
        let newCategory = {
            name: this.state.addCategory
        };
        createCategory(newCategory).then(res => newCategory['_id']=res['_id']);

        let newcategoryList = this.state.categoryList;
        newcategoryList.push(newCategory);
        this.setState({
            categoryList: newcategoryList,
            addCategory: ''
        });
        
    }

    handelDelete() {
        let id = this.state.activeCategory['_id'];
        // 从categoryList中删除activeCategory这篇分类
        let newCategory = this.state.categoryList.filter(category => category !== this.state.activeCategory);
        // 发送delete请求，删除当前文章
        deleteCategoryById(id);
        
        this.setState({
            categoryList: newCategory,
            modal: !this.state.modal,
            activeCategory: ''
        });
    }

    handelUpdate(category) {
        if (!this.state.activeCategory) {
            return alert('未编辑!');
        }
        
        let id = category['_id'];
        updateCategoryById(id, category)
            .then(res => {
                alert('修改分类成功！');
            })
        
    }
    handelInputChange(e, obj) {
        let newCategoryList = this.state.categoryList;
        newCategoryList = newCategoryList.map(item => {
            if (item === obj) {
                item.name = e.target.value;
            }
            return item;
        });

        this.setState({
            categoryList: newCategoryList,
            activeCategory: obj
        });
    }

    render() {
        return (
            <div>
                <Tools title='分类列表'/>
                <div className='content-wrapper'>
                    <CategoryList 
                        categoryList={this.state.categoryList}
                        modal={this.state.modal} 
                        addCategory={this.state.addCategory}
                        handelInputChange={this.handelInputChange}
                        handelAddInputChange={this.handelAddInputChange}
                        handelAddClick={this.handelAddClick} 
                        handelUpdate={this.handelUpdate}
                        handelDelete={this.handelDelete}
                        toggle={this.toggle}
                        />
                </div>
            </div>
        );
    }
}

export default Category;