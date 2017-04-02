import React, { Component } from 'react';
import { Link } from 'react-router';
import ArchiveList from '../components/ArchiveList.jsx';
import {getPostList} from '../utils/request';

class Archive extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            timeList: {}
        }
    }
    
    componentDidMount() {
        // getPostList()
        //     .then(res => {
        //         this.initTimeList(res);
        //     })
        this._getPostList();
    }

     _getPostList() {
        getPostList()
            .then(res => {
                this.initTimeList(res);
            });
    }

    initTimeList(postList) {
        let newTimeList = {};

        postList.forEach(post => {
            let timeArr = post['createdAt'].split("-",2);
            let year = timeArr[0];

            if(!newTimeList[year]){
                newTimeList[year] = [];
            }
            newTimeList[year].push(post);
        });

        this.setState({
            timeList: newTimeList
        });
    }  
    
    render() {
        return (
            <section className='archive'>
                <h2 className='title'>归档</h2>
                <ArchiveList 
                    timeList={this.state.timeList} />
            </section>
        );
    }
}

export default Archive;