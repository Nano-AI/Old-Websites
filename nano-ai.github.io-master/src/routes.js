import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from './components/pages/home';
import AboutPage from './components/pages/about';
import BlogPage from './components/pages/blog';
import Memorial_9_11_20 from './components/pages/blogs/memorial.9.11.20';
import { Router } from '@material-ui/icons';

class Routes extends Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    {/* <MakeRoutes /> */}

                    {/* <Route path="/blog/Memorial_9_11_20" component={Memorial_9_11_20} /> */}

                    <Route path="/" component={HomePage} exact />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/blog" component={BlogPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}

function MakeRoutes() {
    const posts = require('./components/pages/blogs/blogs').blogs;
    return (
        <div>
            {Object.keys(posts).forEach(item => {
                return (
                    <Route path={item} component={posts[item]} />
                );
            })}
        </div>
    );
}

export default Routes;
