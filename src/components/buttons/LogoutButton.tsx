import * as React from 'react';

function LogoutButton(props: any) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

export default LogoutButton;