import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

import style from './styles/scss/index.scss'

// import HomeLayout from './layouts/HomeLayout'
// import HomePage from './pages/Home'
// import PostPage from './pages/Post'
// import TagsPage from './pages/Tags'
// import TagPage from './pages/Tag'
// import AboutPage from './pages/About'

import HomeLayout from './layouts/HomeLayout.jsx'
import PostList from './components/PostList.jsx';
import HomePage from './pages/Home.jsx'
import PostPage from './pages/Post.jsx'
import ArchivePage from './pages/Archive.jsx'
import TagsPage from './pages/Tags.jsx'
import TagPage from './pages/Tag.jsx'
import CategoryPage from './pages/Category.jsx'
import AboutPage from './pages/About.jsx'
import SearchPage from './pages/Search.jsx'

ReactDOM.render((
     <Router history={browserHistory}>
        <Route path='/' component={HomeLayout}>
            <IndexRoute component={HomePage} />
            <Route path='/post/:id' component={PostPage} />
            <Route path='/archive' component={ArchivePage} />
            <Route path='/tag' component={TagsPage} />
            <Route path='/tag/:name' component={TagPage} />
            <Route path='/category' component={CategoryPage} />
            <Route path='/category/:name' component={CategoryPage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/search/:name' component={SearchPage} />
        </Route>
    </Router>
    ),
    document.getElementById('root')
)
