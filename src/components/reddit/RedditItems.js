import React from 'react';
import { useSelector } from 'react-redux';

import RedditItem, { redditItem } from './RedditItem';
import { redditState } from './redditSlice';

export const RedditItems = () => {
    const reddits = useSelector(redditState);

    const redditItems = reddits.length ? reddits.map ((obj) => {
        return (
          <RedditItem key={obj.id} obj={obj}/>
        );
    }) : <div><p>no content found</p></div>;

    return redditItems;
}