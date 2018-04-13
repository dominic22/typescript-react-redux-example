import * as React from 'react';
import './App.css';
import Hello from './components/Hello';
import Clock from './components/Clock';
import Comment from './components/comment/Comment';
import { CommentProps } from './components/comment/comment.constants';
import BasicButton from './components/buttons/BasicButton';
import Greetings from './components/conditional-rendering/Greetings';
import LoginControl from './components/controls/LoginControl';
import Mailbox from './components/mailbox/Mailbox';
import Page from './components/WarningBanner';
import NumberList from './components/lists-and-keys/NumberList';
import { Blog, BLOG_POSTS } from './components/lists-and-keys/Blog';
import EssayForm from './components/forms/EssayForm';
import NameForm from './components/forms/NameForm';

const logo = require('./logo.svg');

const comment: CommentProps = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64',
    },
};

const messages = ['React', 'Re: React', 'Re:Re: React'];

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    Implementation of the ReactJs Quick Start Intro
                </p>
                <h2>Hello World</h2>
                <Hello name="World" enthusiasmLevel={6}/>
                <Clock/>
                <div>
                    <h2>Comments</h2>
                    <Comment comment={comment}/>
                    <Comment
                        comment={{
                        author:
                            {
                                name: 'Dummy Author',
                                avatarUrl:
                                    'https://cdn1.iconfinder.com/data/icons/' +
                                    'ninja-things-1/1772/ninja-simple-256.png'
                            },
                        text: 'This is a dummy comment.',
                        date: new Date()
                        }}
                    />
                </div>
                <div>
                    <h2>Button Events</h2>
                    <BasicButton/>
                </div>
                <div>
                    <h2>Greetings</h2>
                    LoggedOut: <Greetings isLoggedIn={false}/>
                    LoggedIn: <Greetings isLoggedIn={true}/>
                </div>
                <LoginControl/>
                <Mailbox unreadMessages={messages}/>
                <div>
                    <p>Component which is hiding itself</p>
                    <Page/>
                </div>
                <NumberList numbers={[1, 2, 3, 4, 5]}/>
                <Blog posts={BLOG_POSTS}/>
                <NameForm/>
                <EssayForm/>
            </div>
        );
    }
}

export default App;
