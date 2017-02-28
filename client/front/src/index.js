import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import HomeLayout from './layouts/HomeLayout'
import HomePage from './pages/Home'
import PostPage from './pages/Post'
import TagsPage from './pages/Tags'
import TagPage from './pages/Tag'
import AboutPage from './pages/About'

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path='/' component={HomeLayout}>
            <IndexRoute component={HomePage} />
            <Route path='/post/:id' component={PostPage} />
            <Route path='/tag' component={TagsPage} />
            <Route path='/tag/:name' component={TagPage} />
            <Route path='/about' component={AboutPage} />
            {/* <Route path='/user/edit/:id' component={UserEditPage} /> */}
        </Route>

    </Router>
    ),
    document.getElementById('root')
)
