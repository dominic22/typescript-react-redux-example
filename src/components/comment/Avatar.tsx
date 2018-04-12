import * as React from 'react';
import { Author } from './comment.constants';

function Avatar(props: {user: Author}) {
    return (
        <img
            height="64"
            className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />

    );
}

export default Avatar;
