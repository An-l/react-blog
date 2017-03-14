import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import bootstrap from './styles/bootstrap/bootstrap.scss';
import './styles/index.scss'


import HomeLayout from './layouts/HomeLayout.jsx'
import HomePage from './pages/Home.jsx'
import EditPage from './pages/Edit.jsx'
import SettingPage from './pages/Setting.jsx'
import PostList from './components/PostList.jsx'
import CategoryList from './components/CategoryList.jsx'


ReactDOM.render((
     <Router history={browserHistory}>
        <Route path='/' component={HomeLayout}>
            <IndexRoute component={HomePage} />
            <Route path='/post' component={PostList} />
            <Route path='/category' component={CategoryList} />
            <Route path='/edit' component={EditPage} />
            <Route path='/edit/:id' component={EditPage} />
            <Route path='/setting' component={SettingPage} />
        </Route>
    </Router>
    ),
    document.getElementById('root')
)
