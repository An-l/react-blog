import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

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
import AboutPage from './pages/About.jsx'

ReactDOM.render((
     <Router history={browserHistory}>
        <Route path='/' component={HomeLayout}>
            <IndexRoute component={HomePage} />
            <Route path='/post/:id' component={PostPage} />
            <Route path='/archive' component={ArchivePage} />
            <Route path='/tag' component={TagsPage} />
            <Route path='/about' component={AboutPage} />
        </Route>
    </Router>
    // <Router history={hashHistory}>
    //     <Route path='/' component={HomeLayout}>
    //         <IndexRoute component={HomePage} />
    //         <Route path='/post/:id' component={PostPage} />
    //         <Route path='/tag' component={TagsPage} />
    //         <Route path='/tag/:name' component={TagPage} />
    //         <Route path='/about' component={AboutPage} />
    //         {/* <Route path='/user/edit/:id' component={UserEditPage} /> */}
    //     </Route>
    // </Router>
    ),
    document.getElementById('root')
)
