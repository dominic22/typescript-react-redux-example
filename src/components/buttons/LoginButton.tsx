import * as React from 'react';

function LoginButton(props: any) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
}

export default LoginButton;