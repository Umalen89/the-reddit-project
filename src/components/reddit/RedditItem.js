import React from "react";

import './reddit.css';

export default function RedditItem({ obj }) {
    const subredditLink = `https://www.reddit.com/r/${obj.subreddit}/`;
    const authorLink = `https://www.reddit.com/user/${obj.author}/`;
    const commentsLink = `https://www.reddit.com${obj.url}`;

    return (
        <div className="redditItem">
            <div>
                <p>Posted on <a target='_blank' href={subredditLink} rel='noreferrer'>{obj.subreddit_name_prefixed}</a> by 
                    <a target='_blank' href={authorLink} rel='noreferrer'> u/{obj.author}</a></p>
            </div>
            <div className = "redditTitle">
                <h2>{obj.title}</h2>
            </div>
                {(obj.thumbnail && obj.thumbnail[0] === 'h') ? 
                    <div className = "redditThumbnail"><img src={obj.thumbnail} alt="post"/></div> :
                    <p></p>}
            <div className = 'redditFooter'>
                <p>{obj.ups} Ups and {obj.numcomments} <a className='commentLink' target='_blank' rel='noreferrer' href={commentsLink}>Comments</a></p>
            </div>
        </div>
    );
}