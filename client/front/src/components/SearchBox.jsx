import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class SearchBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: ''
        }
    }
    

    handleSubmit(e) {
        e.preventDefault();
        let title = this.state.searchValue;
        if (title !== '') {
            browserHistory.push(`/search/${title}`);
        }
    }
    handleChange(e) {
        this.setState({
            searchValue: e.target.value
        });
    }

    render() {
        return (
            <form className='search-wrap' onSubmit={this.handleSubmit.bind(this)}>
                <input className='search' type='text'
                    value={this.state.searchValue}
                    onChange={this.handleChange.bind(this)} />
                <button title="搜索" className='search-btn'>
                    <i className="iconfont icon-search"></i>
                </button>
            </form>
        );
    }
}

export default SearchBox;