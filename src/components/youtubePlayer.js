import React from 'react';
import YouTube from 'react-youtube';

class YouTubePlayer extends React.Component {

        constructor( props ){
            super( props );

        }

      render() {

        let videoId = this.props.video !== null ? this.props.video.id.videoId : '';

        const opts = {
          playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 0
          }
        };

        return (
            <div className="video-detail col-md-12">
                <div className="embed-responsive embed-responsive-16by9">
                    <YouTube
                            videoId={ videoId }
                            opts={opts}
                            // onPlay={ this.getCurrentTime( event.target ) }
                            onReady={this._onReady}
                        />
                </div>
            </div>
        );

      }

      getCurrentTime( e ){
        var currentTime;
        console.log(e)
        e.getCurrentTime();
        // setInterval(function(){
        //     currentTime = Math.round(player.getCurrentTime())
        //     if(currentTime == 10){
        //         console.log('its 10 seconds')
        //     }
        //     console.log(currentTime)
        // },1000);
    }

      _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    }

    export default YouTubePlayer;