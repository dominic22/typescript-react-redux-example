import * as React from 'react';
import LoginButton from '../buttons/LoginButton';
import LogoutButton from '../buttons/LogoutButton';

class LoginControl extends React.Component {
    constructor(props: any) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        const button = isLoggedIn ? (
            <LogoutButton onClick={this.handleLogoutClick}/>
        ) : (
            <LoginButton onClick={this.handleLoginClick}/>
        );

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        );
    }
}