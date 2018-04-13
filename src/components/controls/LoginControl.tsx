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

        const button = isLoggedIn ? (
            <LogoutButton onClick={this.handleLogoutClick}/>
        ) : (
            <LoginButton onClick={this.handleLoginClick}/>
        );

        return (
            <div>
                <Greetings isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        );
    }
}

export default LoginControl;
