import * as React from 'react';
import Avatar from './Avatar';
import { Author } from './comment.constants';

function UserInfo(props: {user: Author}) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

export default UserInfo;