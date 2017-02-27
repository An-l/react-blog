import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import HomeLayout from './layouts/HomeLayout'
import HomePage from './pages/Home'
import PostPage from './pages/Post'
import TagsPage from './pages/Tags'
import AboutPage from './pages/About'

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path='/' component={HomeLayout}>
            <IndexRoute component={HomePage} />
            <Route path='/posts/:id' component={PostPage} />
            <Route path='/tags' component={TagsPage} />
            <Route path='/about' component={AboutPage} />
            {/* <Route path='/user/edit/:id' component={UserEditPage} /> */}
        </Route>

    </Router>
    ),
    document.getElementById('root')
)
