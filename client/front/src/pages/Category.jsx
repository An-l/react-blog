import React, { Component } from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';
import CategoryList from '../components/CategoryList.jsx';
import ArchiveList from '../components/ArchiveList.jsx';
import {getPostByCategory, getCategoriesList} from '../utils/request';

class Category extends Component {
     constructor(props) {
        super(props);

        this.state = {
            categoryList: [],
            timeList: {},
            activeCategory: '前端杂谈'
        };
        this.handleActiveChange = this.handleActiveChange.bind(this);
    }

    componentDidMount() {
        let category = this.props.params.name || this.state.activeCategory; 
         // 获取分类列表
        getCategoriesList()
            .then(res => {
               this.setState({
                   categoryList: res
               });
            });
        // 根据分类获取文章列表
        this._getPostList(category);
    }

    // 改变当前选中的分类
    handleActiveChange(category) {
        this._getPostList(category);
    }

     // 根据分类获取文章数组
     _getPostList(category) {
        getPostByCategory(category)
            .then(res => {
                this.initTimeList(res,category);
            });
    }

     // 从获取的文章数组中，初始化时间列表对象
    initTimeList(postList, category) {
        let newTimeList = {};

        postList.length && postList.forEach(post => {
            let timeArr = post['createdAt'].split("-",2);
            let year = timeArr[0];

            if(!newTimeList[year]){
                newTimeList[year] = [];
            }
            newTimeList[year].push(post);
        });

        this.setState({
            timeList: newTimeList,
            activeCategory: category
        });
    }



    render() {

        return (
            <section className="category">
                <CategoryList 
                    categoryList={this.state.categoryList} 
                    activeCategory={this.state.activeCategory} 
                    handleActiveChange={this.handleActiveChange}/>

                <ArchiveList 
                    timeList={this.state.timeList} 
                    year={this.props.params.year}/>
            </section>
        );
    }
}

export default Category;