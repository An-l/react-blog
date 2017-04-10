import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

// var Promise = require('es6-promise').Promise;
require('es6-promise').polyfill();

import style from './styles/scss/index.scss'

// import HomeLayout from './layouts/HomeLayout'
// import HomePage from './pages/Home'
// import PostPage from './pages/Post'
// import TagsPage from './pages/Tags'
// import TagPage from './pages/Tag'
// import AboutPage from './pages/About'

import HomeLayout from './layouts/HomeLayout.jsx'
// import HomePage from './pages/Home.jsx'
// import PostPage from './pages/Post.jsx'
// import ArchivePage from './pages/Archive.jsx'
// import TagsPage from './pages/Tags.jsx'
// import TagPage from './pages/Tag.jsx'
// import CategoryPage from './pages/Category.jsx'
// import AboutPage from './pages/About.jsx'
// import SearchPage from './pages/Search.jsx'

const getComponentLazily = (importor, name = 'default') => {
  return (location, cb) => {
    importor.then((module) => {
      //如果是默认模块，则是 module.default
      cb(null, module[name]);
    })
      .catch((err) => {
        console.error(`动态路由加载失败：${err}`)
      });
  }
};

ReactDOM.render((
     <Router history={browserHistory} onUpdate={handleUpdate}>
        <Route path='/' component={HomeLayout}>
            <IndexRoute getComponent={getComponentLazily(import('./pages/Home.jsx'))}/>
            <Route path='post/:id' getComponent={getComponentLazily(import('./pages/Post.jsx'))}/>
            <Route path='archive' getComponent={getComponentLazily(import('./pages/Archive.jsx'))}/>
            <Route path='tag/:name' getComponent={getComponentLazily(import('./pages/Tag.jsx'))}/>
            <Route path='category' getComponent={getComponentLazily(import('./pages/Category.jsx'))}/>
            <Route path='category/:name' getComponent={getComponentLazily(import('./pages/Category.jsx'))}/>
            <Route path='about' getComponent={getComponentLazily(import('./pages/About.jsx'))}/>
            <Route path='search/:name' getComponent={getComponentLazily(import('./pages/Search.jsx'))}/>
            <Route path='/404' getComponent={getComponentLazily(import('./pages/404Page.jsx'))}/>
            <Route path='*' getComponent={getComponentLazily(import('./pages/404Page.jsx'))}/>
        </Route>
    </Router>
    ),
    document.getElementById('root')
)

// // To add to window  
// if (!window.Promise) {  
//   window.Promise = Promise;  
// }  

stopLoading();


function handleUpdate() {
  let {
    action
  } = this.state.location;

  if (action === 'PUSH') {
    window.scrollTo(0, 0);
  }
}

function stopLoading() {
    let loading = document.getElementById('loading');
    document.body.removeChild(loading);
}