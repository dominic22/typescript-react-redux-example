import * as React from 'react';

function UserGreeting(props: any) {
    return <p>Welcome back :)</p>;
}

function GuestGreeting(props: any) {
    return <p>Please sign up.</p>;
}

function Greetings(props: { isLoggedIn: boolean}) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting/>;
    }
    return <GuestGreeting/>;
}

export default Greetings;
