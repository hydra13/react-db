import React from "react";
import { Route, Switch } from 'react-router-dom';

import Layout from '../layouts/Layout';
import Main from '../pages/Main';
import Users from '../pages/Users';
import User from '../pages/User';
import Posts from '../pages/Posts';
import Post from '../pages/Post'
import Comments from '../pages/Comments';
import Comment from '../pages/Comment';
import PageNotFound from '../pages/PageNotFound';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/users" component={Users} />
                    <Route path="/users/:userId" component={User} />
                    <Route exact path="/posts" component={Posts} />
                    <Route path="/posts/:postId" component={Post} />
                    <Route exact path="/comments" component={Comments} />
                    <Route path="/comments/:commentId" component={Comment} />
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </Layout>
        )
    }
}

export default App;