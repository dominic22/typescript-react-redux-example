import * as React from 'react';
import { CommentProps } from './comment.constants';
import UserInfo from './UserInfo';

function formatDate(date: Date) {
    return date.toLocaleDateString();
}

function Comment(props: CommentProps) {
    return (
        <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

export default Comment;