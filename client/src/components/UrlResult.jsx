import React from 'react';
function UrlResult({ shortURL }) {
    return(
        // <div>
        //     <p>{shortURL}</p>
        // </div>
        <div class="alert alert-success" role="alert">
            {shortURL}
        </div>
    )
}

export default UrlResult;