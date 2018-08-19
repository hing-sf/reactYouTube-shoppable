import React from 'react';
import YouTube from 'react-youtube';

class YouTubePlayer extends React.Component {

    constructor( props ){
        super( props );

        this.callFunction = this.callFunction.bind(this);
        this._onReady = this._onReady.bind(this);
    }

    render() {
        // let videoId = this.props.video !== null ? this.props.video.id.videoId : '';

        let videoDetail;

        if ( this.props.video !== null ) {
            videoDetail = this.props.video;
        } else {
            return <div>Loading....</div>;
        }

        const opts = {
            playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 0
            }
        };

        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <YouTube
                            className="embed-responsive-item"
                            videoId={ videoDetail.id.videoId }
                            opts={opts}
                            onPause={ this.getElapsedTime }
                            onReady={ this._onReady }
                        />
                </div>
                <div className="details">
                <div>{ videoDetail.snippet.title }</div>
                <div>{ videoDetail.snippet.description }</div>
            </div>
            </div>
        );

    }

    callFunction(){
        console.log(`Action set at ${setAction}`)
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        // event.target.pauseVideo();
        let currentTime;
        let doSomething = 2;

        setInterval( () => {
            currentTime = Math.round(event.target.getCurrentTime());
            // console.log(currentTime);
            if( currentTime === doSomething ){
                console.log(`doSomething at ${doSomething} seconds`);
            }
        },1000);

    }
 }

export default YouTubePlayer;