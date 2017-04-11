import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';
import CategoryList from '../components/CategoryList.jsx';
import ArchiveList from '../components/ArchiveList.jsx';
import Loading from '../components/Loading.jsx';

import {getPostByCategory, getCategoriesList} from '../utils/request';
 
class Category extends Component {
     constructor(props) {
        super(props);

        this.state = {
            categoryList: [],
            postList: [],
            activeCategory: '前端杂谈'
        };
        this.handleActiveChange = this.handleActiveChange.bind(this);
    }

    componentDidMount() {
        let category = this.props.params.name || this.state.activeCategory; 

        Promise.all([getCategoriesList(), getPostByCategory(category)])
            .then(values => {
                this.setState({
                    categoryList: values[0],
                    postList: values[1],
                    activeCategory: category
                });
            })
    }

    // 改变当前选中的分类
    handleActiveChange(category) {
        getPostByCategory(category)
            .then(res => {
                this.setState({
                    postList: res,
                    activeCategory: category
                });
            });
    }


    render() {
        if (!this.state.categoryList.length) {
            
            return <Loading />
        } else {
            return (
                <section className="category">
                    <CategoryList 
                        categoryList={this.state.categoryList} 
                        activeCategory={this.state.activeCategory} 
                        handleActiveChange={this.handleActiveChange}/>

                    <ArchiveList postList={this.state.postList} />
                </section>
            );
        }
    }
}

export default Category;