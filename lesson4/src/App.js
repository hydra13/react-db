import React from "react";
import ReactDOM from "react-dom";

import './App.scss';
import Blog from './components/Blog';
import WelcomeModal from './components/WelcomeModal';

const posts = [
    {
        title: "Post 1",
        postBody: "Post 1 body text",
        created: new Date().toDateString(),
        author: 'Tester'
    },
    {
        title: "Post 2",
        postBody: "Post 2 body text",
        created: new Date().toDateString(),
        author: 'Tester'
    },
    {
        title: "Post 3",
        postBody: "Post 3 body text",
        created: new Date().toDateString(),
        author: 'Tester'
    }
]

const modalContent = {
    title: "Welcome!",
    content: "This is the simple description"
}

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Blog posts={posts} />
                <WelcomeModal title={modalContent.title} content={modalContent.content} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#app'))