import React, { Component } from 'react';

//page appears after submit
class Success extends Component {
    render() {
        return (
            <div>
                <h1>SUCCESS!</h1>
                <br />
                <iframe src="https://giphy.com/embed/xNBcChLQt7s9a" title="30Rock Success Gif" width="240" height="240" frameBorder="0" className="giphy-embed" allowFullScreen></iframe> <p><a href="https://giphy.com/gifs/win-xNBcChLQt7s9a">via GIPHY</a></p>
            </div>
        )
    }
}

export default Success;