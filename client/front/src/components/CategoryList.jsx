import React, { Component } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

class CategoryList extends Component {
    render() {
        return (
            this._renderCategoryList(this.props.categoryList)
        );
    }

     _renderCategoryList(categoryList) {
        const checkActive = (name) => classnames({'active': this.props.activeCategory === name});
        return (
            <div className="category-list-wrap" aria-hidden="true">
                <h2 className="title">分类</h2>
                <div className="category-list">
                    {
                        categoryList.map(item => {
                            return(
                                <Link className={checkActive(item.name)} 
                                    key={item['_id']} 
                                    to={`category/${item.name}`} 
                                    onClick={() => this.props.handleActiveChange(item.name)}>
                                        {item.name}
                                    </Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default CategoryList;