import * as React from 'react';
import { CommentProps } from './comment.constants';
import UserInfo from './UserInfo';

function formatDate(date: Date) {
    return date.toLocaleDateString();
}

function Comment(props: { comment: CommentProps}) {
    return (
        <div className="Comment">
            <UserInfo user={props.comment.author}/>
            <div className="Comment-text">
                {props.comment.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.comment.date)}
            </div>
        </div>
    );
}

export default Comment;