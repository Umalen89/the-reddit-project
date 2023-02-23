import React from 'react';
import { useSelector } from 'react-redux';

import { redditState } from './redditSlice';

export const RedditItems = () => {
    const reddits = useSelector(redditState);

    const redditItems = reddits.length ? reddits.map ((obj) => {
        return (
            <div>
                <h2>{obj.title}</h2>
                {(obj.thumbnail && obj.thumbnail[0] === 'h') ? 
                    <img src={obj.thumbnail} alt="post"/> :
                    <p>image not found</p>}
            </div>
        );
    }) : <div><p>no content found</p></div>;

    return redditItems;
}