import * as React from 'react';
import './App.css';
import Hello from './components/Hello';
import Clock from './components/Clock';
import Comment from './components/comment/Comment';
import { CommentProps } from './components/comment/comment.constants';
import BasicButton from './components/buttons/BasicButton';
import Greetings from './components/conditional-rendering/Greetings';
import LoginControl from './components/controls/LoginControl';

const logo = require('./logo.svg');

const comment: CommentProps = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64',
    },
};

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
                                    'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-256.png'
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
            </div>
        );
    }
}

export default App;
