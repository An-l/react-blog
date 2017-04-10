import React, { Component } from 'react';
import { Link } from 'react-router';
import ArchiveList from '../components/ArchiveList.jsx';
import Loading from '../components/Loading.jsx';

import {getPostList} from '../utils/request';

class Archive extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            postList: []
        }
    }
    
    componentDidMount() {
        getPostList()
            .then(res => {
                this.setState({
                    postList: res
                });
            });
    }
    
    render() {
        if (!Object.keys(this.state.postList).length) {
            return <Loading />
        } else {
            return (
                <section className='archive'>
                    <h2 className='title'>归档</h2>
                    <ArchiveList 
                        postList={this.state.postList} />
                </section>
            );
        }
    }
}

export default Archive;