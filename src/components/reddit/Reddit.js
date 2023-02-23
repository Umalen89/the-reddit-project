import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchInfo, redditStatus, redditError } from "./redditSlice";
import { RedditItems }  from "./RedditItems";

//import './RedditContainer.css';

function Reddit() {
    const status = useSelector(redditStatus);
    const error = useSelector(redditError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchInfo())
    }, [dispatch]);

    let content;

    if (status === 'loading') {
        content = (
            <div>
                <h1 className="loading">LOADING...</h1>
            </div>
        )
    } else if ( status === 'success') {
       content = ( <div>
        <RedditItems />
    </div>)
    } else if ( status === 'failed') {
        content = (<div><h1>ERROR</h1></div>);
        window.alert(error);
        return;
    }

    return (
      <main>
        {content}
      </main>  
    )
}

export default Reddit;