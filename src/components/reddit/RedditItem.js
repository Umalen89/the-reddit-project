import React from "react";

import './reddit.css';

export default function RedditItem({ obj }) {
    return (
        <div className="redditItem">
            <div>
                <p>Posted on {obj.subreddit_name_prefixed} by u/{obj.author}</p>
            </div>
            <div className = "redditTitle">
                <h2>{obj.title}</h2>
            </div>
                {(obj.thumbnail && obj.thumbnail[0] === 'h') ? 
                    <div className = "redditThumbnail"><img src={obj.thumbnail} alt="post"/></div> :
                    <p>Image coudl not be found</p>}
            <div className = 'redditFooter'>
                
            </div>
        </div>
    );
}