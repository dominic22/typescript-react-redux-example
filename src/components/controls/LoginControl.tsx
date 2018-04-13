import * as React from 'react';
import LoginButton from '../buttons/LoginButton';
import LogoutButton from '../buttons/LogoutButton';
import Greetings from '../conditional-rendering/Greetings';

interface Props { /* declare your component's props here */ }
interface State {
    isLoggedIn: boolean;
}

class LoginControl extends React.Component<Props, State> {
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

        // before change
        // const button = isLoggedIn ? (
        //     <LogoutButton onClick={this.handleLogoutClick}/>
        // ) : (
        //     <LoginButton onClick={this.handleLoginClick}/>
        // );
        // before change button was added as following in the markup below now we use inline expressions
        // {button}

        return (
            <div>
                <Greetings isLoggedIn={isLoggedIn}/>
                {isLoggedIn ? (
                    <LogoutButton onClick={this.handleLogoutClick}/>
                ) : (
                    <LoginButton onClick={this.handleLoginClick}/>
                )}
            </div>
        );
    }
}

export default LoginControl;
