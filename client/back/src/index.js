import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';
import jQuery from 'jquery'

import bootstrap from './styles/bootstrap/bootstrap.scss';
import './styles/index.scss'

import LoginPage from './pages/Login.jsx'
import HomeLayout from './layouts/HomeLayout.jsx'
import HomePage from './pages/Home.jsx'
import EditPage from './pages/Edit.jsx'
import SettingPage from './pages/Setting.jsx'
import PostPage from './pages/Post.jsx'
import CategoryPage from './pages/Category.jsx'
import ErrorPage from './pages/Error.jsx'


ReactDOM.render((
     <Router history={browserHistory}>
        <Route path='admin' >
            <IndexRoute component={LoginPage}/>
            <Route path='manage' component={HomeLayout} onEnter={requireCredentials}>
                <IndexRoute component={HomePage} />
                <Route path='post' component={PostPage} />
                <Route path='category' component={CategoryPage} />
                <Route path='edit' component={EditPage} />
                <Route path='edit/:id' component={EditPage} />
                <Route path='setting' component={SettingPage} />
            </Route>
        </Route>
        <Route path="*" component={ErrorPage} />
    </Router>
    ),
    document.getElementById('root')
)

// 页面路由跳转前验证token
function requireCredentials(nextState, replace, next) {
  let token = sessionStorage.getItem('blog-token') || '';
  if (token) {
    next();//成功,通过next()成功跳转
  } else {
    replace('/admin/');
    alert('请重新登录啊！');
    next();
  }
}　　